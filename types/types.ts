export type Money = {
    amount: string;
    currencyCode: string;
  };

  export type Connection<T> = {
    edges: Array<Edge<T>>;
  };

  export type Edge<T> = {
    node: T;
  };

  export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  
  export type Menu = {
    title: string;
    path: string;
  };

  export type Page = {
    id: string;
    title: string;
    handle: string;
    body: string;
    bodySummary: string;
    seo?: SEO;
    createdAt: string;
    updatedAt: string;
  };
  
  export type ShopifyPagesOperation = {
    data: {
      pages: Connection<Page>;
    };
  };

  export type ShopifyMenuOperation = {
    data: {
      menu?: {
        items: {
          title: string;
          url: string;
        }[];
      };
    };
    variables: {
      handle: string;
    };
  };
  
  export type ShopifyPageOperation = {
    data: { pageByHandle: Page };
    variables: { handle: string };
  };


  export type Cart = Omit<ShopifyCart, 'lines'> & {
    lines: CartItem[];
  };
  
  export type CartProduct = {
    id: string;
    handle: string;
    title: string;
    featuredImage: ImageProduct;
  };

  export type VariantsProduct = {
    node: {
      id: string;
      title: string;
      selectedOptions?: {
        name: string;
        value: string;
      }[];
      price?: Money;
      compareAtPrice: Money;
    }
  }
  
  export type CartItem = {
    id: string | undefined;
    quantity: number;
    cost: {
      totalAmount: Money;
    };
    merchandise: {
      id: string;
      title: string;
      product: CartProduct;
    };
  };

export type SEO = {
title: string;
description: string;
};

export type Product = {
    id: string;
    title: string;
    handle: string;
    compareAtPriceRange: {
      maxVariantCompareAtPrice: {
        amount: string;
        currencyCode: string;
      };
      minVariantCompareAtPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    priceRange: {
        maxVariantPrice: {
            amount: string;
            currencyCode: string;
        };
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    variants: {
      edges: VariantsProduct[];
    }
    images: {
        edges: ImageProduct[];
    };
    seo: SEO;
    availableForSale: boolean;
    tags: string[];
    updatedAt: string;
};

export type ShopifyProduct = {
    data: {
        productByHandle: Product;
    };
    variables: {
        handle: string;
    };
};

export type ImageProduct = {
    node: {
        altText: string;
        originalSrc: string;
        width: number;
        height: number;
    }
}

export type ShopifyCartOperation = {
    data: {
      cart: ShopifyCart;
    };
    variables: {
      cartId: string;
    };
  };
  
  export type ShopifyCreateCartOperation = {
    data: { cartCreate: { cart: ShopifyCart } };
  };
  
  export type ShopifyAddToCartOperation = {
    data: {
      cartLinesAdd: {
        cart: ShopifyCart;
      };
    };
    variables: {
      cartId: string;
      lines: {
        merchandiseId: string;
        quantity: number;
      }[];
    };
  };

  export type ShopifyChekoutUrl = {
    data: {
      cart: {
        checkoutUrl: string;
      };
    };
    variables: {
      cartId: string;
    };
  };

  export type ShopifyCheckoutCreateUrl = {
    data: {
        checkoutCreate: {
            checkout: {
                webUrl: string; // URL pour accéder au checkout
            };
        };
    };
    variables: {
        variantId: string;
        totalQuantity: number;
    };
};
  
  export type ShopifyRemoveFromCartOperation = {
    data: {
      cartLinesRemove: {
        cart: ShopifyCart;
      };
    };
    variables: {
      cartId: string;
      lineIds: string[];
    };
  };
  
  export type ShopifyUpdateCartOperation = {
    data: {
      cartLinesUpdate: {
        cart: ShopifyCart;
      };
    };
    variables: {
      cartId: string;
      lines: {
        id: string;
        merchandiseId: string;
        quantity: number;
      }[];
    };
  };

  export type ShopifyCart = {
    id: string | undefined;
    checkoutUrl: string;
    cost: {
      subtotalAmount: Money;
      totalAmount: Money;
      totalTaxAmount: Money;
    };
    lines: Connection<CartItem>;
    totalQuantity: number;
  };
