import { Cart, CartItem, Product, VariantsProduct } from '@/types/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UpdateType = 'plus' | 'minus' | 'delete';

interface CartState {
  cart: Cart;
  addCartItem: (variant: VariantsProduct ,product: Product) => void;
  updateCartItem: (merchandiseId: string, updateType: UpdateType) => void;
}

interface OpenCartState {
  isOpenCart: boolean;
  setIsOpenCart: (isOpen: boolean) => void;
}

interface FloatingBarState {
  isOpenFloatingBar: boolean;
  setIsOpenFloatingBar: (isOpenFloatingBar: boolean) => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

interface CheckoutUrlState {
  checkoutUrl: string;
  setCheckoutUrl: (url: string) => void;
}

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function updateCartItem(item: CartItem, updateType: UpdateType): CartItem | null {
  if (updateType === 'delete') return null;

  const newQuantity = updateType === 'plus' ? item.quantity + 1 : item.quantity - 1;
  if (newQuantity === 0) return null;

  const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
  const newTotalAmount = calculateItemCost(newQuantity, singleItemAmount.toString());

  return {
    ...item,
    quantity: newQuantity,
    cost: {
      ...item.cost,
      totalAmount: {
        ...item.cost.totalAmount,
        amount: newTotalAmount
      }
    }
  };
}

function createOrUpdateCartItem(
  existingItem: CartItem | undefined,
  variant: VariantsProduct,
  product: Product
): CartItem {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, product.priceRange.minVariantPrice.amount);

  return {
    id: existingItem?.id,
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: product.priceRange.minVariantPrice.currencyCode
      }
    },
    merchandise: {
      id: variant.node.id,
      title: variant.node.title,
      product: {
        id: product.id,
        handle: product.handle,
        title: product.title,
        featuredImage: product.images.edges[0],
      },
    }
  };
}

function updateCartTotals(lines: CartItem[]): Pick<Cart, 'totalQuantity' | 'cost'> {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce((sum, item) => sum + Number(item.cost.totalAmount.amount), 0);
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'EUR';

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
      totalTaxAmount: { amount: '0', currencyCode }
    }
  };
}

function createEmptyCart(): Cart {
  return {
    id: undefined,
    checkoutUrl: '',
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'EUR' },
      totalAmount: { amount: '0', currencyCode: 'EUR' },
      totalTaxAmount: { amount: '0', currencyCode: 'EUR' }
    }
  };
}

export const useCheckoutUrlStore = create<CheckoutUrlState>((set) => ({
  checkoutUrl: "",
  setCheckoutUrl: (checkoutUrl) => set({ checkoutUrl }),
}))

export const useOpenCartStore = create<OpenCartState>((set) => ({
  isOpenCart: false,
  setIsOpenCart: (isOpenCart) => set({ isOpenCart }),
}))

export const useVisibleFloatingCartStore = create<FloatingBarState>((set) => ({
  isOpenFloatingBar: false,
  setIsOpenFloatingBar: (isOpenFloatingBar) => set({ isOpenFloatingBar }),
  isVisible: false,
  setIsVisible: (isVisible) => set({ isVisible }),
}))

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: createEmptyCart(),
      addCartItem: (variant, product) =>
        set((state) => {
          const currentCart = state.cart || createEmptyCart();
          const existingItem = currentCart.lines.find(
            (item) => item.merchandise.id === variant.node.id
          );
          const updatedItem = createOrUpdateCartItem(existingItem, variant, product);

          const updatedLines = existingItem
            ? currentCart.lines.map((item) =>
                item.merchandise.id === variant.node.id ? updatedItem : item
              )
            : [...currentCart.lines, updatedItem];

          return { cart: { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines } };
        }),

      updateCartItem: (merchandiseId, updateType) =>
        set((state) => {
          const currentCart = state.cart || createEmptyCart();
          const updatedLines = currentCart.lines
            .map((item) =>
              item.merchandise.id === merchandiseId ? updateCartItem(item, updateType) : item
            )
            .filter(Boolean) as CartItem[];

          if (updatedLines.length === 0) {
            return {
              cart: {
                ...currentCart,
                lines: [],
                totalQuantity: 0,
                cost: {
                  ...currentCart.cost,
                  totalAmount: { ...currentCart.cost.totalAmount, amount: '0' }
                }
              }
            };
          }

          return { cart: { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines } };
        })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);