"use client";

import { Product } from "@/types/types";
import { useCartStore } from "../../store/cart"; // Assurez-vous que l'import est correct
import { cn } from "@/lib/utils";
import { FC } from "react";

interface FreeShippingBarProps {
    product?: Product; 
  }

const FreeShippingBar: FC<FreeShippingBarProps> = ({ product }) => {
  const {cart} = useCartStore();

  if (!product) return null;

  const secondVariant = product.variants.edges[1];

  // Définir les constantes
  const BUNDLE_THRESHOLD = parseFloat(secondVariant?.node.price?.amount ?? "0"); // Montant requis pour la livraison gratuite (bundle)
  const totalAmount = parseFloat(cart.cost.totalAmount.amount); // Montant total du panier

  // Calculer combien il manque pour atteindre la livraison gratuite
  const amountLeft = Math.max(0, BUNDLE_THRESHOLD - totalAmount);

  // Calculer le pourcentage de progression
  const progressPercentage = Math.min((totalAmount / BUNDLE_THRESHOLD) * 100, 100);

  return (
    <div className="text-sm flex flex-col justify-center text-center px-2 border-b">
      {amountLeft > 0 ? (
        <p className={cn("text-xs", "sm:text-sm")}>
          Plus que <strong>{amountLeft.toFixed(2)}€</strong> pour profiter de la livraison gratuite !
        </p>
      ) : (
        <p className={cn("text-xs font-medium", "sm:text-sm")}>
          🎉 Bravo ! Vous profitez de la livraison offerte !
        </p>
      )}

      {/* Barre de progression */}
      <div className="w-full h-2.5 bg-gray-200 rounded-xs mt-2">
        <div
          className="h-full bg-gradient-to-b from-primary to-secondary rounded-xs transition-all"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default FreeShippingBar;
