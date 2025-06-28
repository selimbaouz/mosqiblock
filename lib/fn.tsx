import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function GetRatings({ value, className }: { value: number; className: string }) {
  // Calcul du nombre d'étoiles pleines, demi et vides
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <TiStarFullOutline key={`full-${i}`} className={className} />
      ))}
      {hasHalfStar && <TiStarHalfOutline key="half" className={className} />}
      {[...Array(emptyStars)].map((_, i) => (
        <TiStarOutline key={`empty-${i}`} className={className} />
      ))}
    </div>
  );
}

/**
 * Calcule une plage de dates de livraison.
 * @param {number} startDays - Nombre minimum de jours à partir d'aujourd'hui.
 * @param {number} endDays - Nombre maximum de jours à partir d'aujourd'hui.
 * @returns {string[]} - Tableau contenant les deux dates formatées.
 */
export function calculateDeliveryDates(startDays: number, endDays: number): string[] {
    const today = new Date();
  
    // Calcul des deux dates
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + startDays);
  
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + endDays);
  
    // Formatage des dates (exemple : "29 Janvier")
    const formattedStartDate = format(startDate, "d MMMM", { locale: fr });
    const formattedEndDate = format(endDate, "d MMMM", { locale: fr });
  
    return [formattedStartDate, formattedEndDate];
  }