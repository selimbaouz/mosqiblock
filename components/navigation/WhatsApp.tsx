import { useIsHydrated } from '@/hook/useIsHydrated';
import { cn } from '@/lib/utils';
import { useVisibleFloatingCartStore } from '@/store/cart';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

// Remplace ce numéro par le tien (format international sans +)
const WHATSAPP_NUMBER = '33773049948'; // Exemple : 33612345678 pour +33 6 12 34 56 78

const WhatsApp = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const { isVisible } = useVisibleFloatingCartStore();

  const isHydrated = useIsHydrated();
      
  if (!isHydrated) {
      return null;
    }

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className={cn(
        "fixed z-50 right-6 size-16 lg:size-24 rounded-full border-2 border-secondary bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform",
        pathname === `/${locale}/products/mosqiblock` && !isVisible ? "bottom-24 lg:bottom-28" : "bottom-10"
      )}
    >
      <div
        className={cn(
          'size-3 lg:size-5 rounded-full absolute top-2 left-0 bg-green-400',
        )}
      />
      <FaWhatsapp className="size-8 lg:size-12 text-white" />
    </a>
  );
};

export default WhatsApp;
