"use client";

import { useCartStore } from "../../store/cart";
import { cn } from "@/lib/utils";
import MosqiBlockGiftImg from "@/public/images/product_mosqitoes.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

// ✅ Bons paliers
const FIRST_TIER = 55.98;
const SECOND_TIER = 83.97; // Correct ici

const FreeGiftBar = () => {
  const t = useTranslations("fe.cart.freeGiftBar");
  const { cart } = useCartStore();
  const totalAmount = parseFloat(cart.cost.totalAmount.amount || "0");

  const firstReached = totalAmount >= FIRST_TIER;
  const secondReached = totalAmount >= SECOND_TIER;

  const toFirst = Math.max(0, FIRST_TIER - totalAmount);
  const toSecond = Math.max(0, SECOND_TIER - totalAmount);

  // ✅ Gestion des messages correcte
 let message;
  if (secondReached) {
    message = t.rich("congratsTwo", {
      strong: (chunks) => <strong>{chunks}</strong>
    });
  } else if (firstReached) {
    message = (
      <>
        {t.rich("congratsOne", { strong: (chunks) => <strong>{chunks}</strong> })}
        <br />
        {t.rich("spendMoreTwo", { amount: toSecond.toFixed(2), strong: (chunks) => <strong>{chunks}</strong> })}
      </>
    );
  } else {
    message = (
      <>
        {t.rich("spendMoreOne", { amount: toFirst.toFixed(2), strong: (chunks) => <strong>{chunks}</strong> })}
        <br />
        {t("or")} {t.rich("spendMoreTwo", { amount: toSecond.toFixed(2), strong: (chunks) => <strong>{chunks}</strong> })}
      </>
    );
  }

  // ✅ Barre de progression fluide
  const progress = Math.min((totalAmount / SECOND_TIER) * 100, 100);

  return (
    <div className="text-sm flex flex-col justify-center text-center px-2">
      <div className={cn("text-xs sm:text-sm font-medium py-1")}>{message}</div>

      {/* ✅ Affichage des cadeaux */}
      {secondReached ? (
        <div className="flex justify-center gap-2 my-2">
          <Image
            src={MosqiBlockGiftImg}
            alt="Free MosqiBlock"
            width={50}
            height={60}
            className="inline-block"
          />
          <Image
            src={MosqiBlockGiftImg}
            alt="Free MosqiBlock"
            width={50}
            height={60}
            className="inline-block"
          />
        </div>
      ) : firstReached ? (
        <div className="flex justify-center gap-2 my-2">
          <Image
            src={MosqiBlockGiftImg}
            alt="Free MosqiBlock"
            width={50}
            height={60}
            className="inline-block"
          />
        </div>
      ) : null}

      {/* ✅ Barre de progression */}
      <div className="w-full h-2.5 bg-gray-200 rounded-xs mt-2 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-primary rounded-xs transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
        <div className="absolute left-0 top-0 w-full h-full rounded-xs border border-secondary pointer-events-none" />
      </div>

      {/* ✅ Graduation */}
      <div className="flex justify-between text-[10px] text-gray-500 mt-1 px-1">
        <span>0 CAD</span>
        <span>{t("graduationOne", { amount: FIRST_TIER.toFixed(2) })}</span>
        <span>{t("graduationTwo", { amount: SECOND_TIER.toFixed(2) })}</span>
      </div>
    </div>
  );
};

export default FreeGiftBar;
