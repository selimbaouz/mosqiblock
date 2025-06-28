import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface PackProgressProps {
  selectedPack: number; // 0: pack 1, 1: pack 2, 2: pack 3
}

export default function PackProgress({ selectedPack }: PackProgressProps) {
  // Animation state pour chaque barre
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    // Animation pour chaque barre selon le pack sélectionné
    if (selectedPack === 0) {
      setProgress1(0);
      setProgress2(0);
    } else if (selectedPack === 1) {
      setProgress1(100);
      setProgress2(0);
    } else if (selectedPack === 2) {
      setProgress1(100);
      setProgress2(100);
    }
  }, [selectedPack]);

  return (
    <div className={cn("w-full rounded-2xl bg-white flex items-center justify-between py-3 border border-secondary px-6 gap-4")}>
      {/* Première barre */}
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <div className="flex gap-2 justify-center items-center relative w-full">
          <FaCheckCircle
            className={cn(
              "size-[14px] transition-colors duration-300",
              progress1 === 100 ? "text-primary" : "text-foreground"
            )}
          />
          <p className={cn("text-xs font-semibold")}>-33%</p>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 border border-secondary overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-700")}
            style={{
              width: `${progress1}%`,
              background: progress1 === 100 ? "var(--tw-prose-primary, #956BFF)" : "transparent"
            }}
          />
        </div>
      </div>
      {/* Deuxième barre */}
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <div className="flex gap-2 justify-center items-center relative w-full">
          <FaCheckCircle
            className={cn(
              "size-[14px] transition-colors duration-300",
              progress2 === 100 ? "text-primary" : "text-foreground"
            )}
          />
          <p className={cn("text-xs font-semibold")}>-40%</p>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 border border-secondary overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-700")}
            style={{
              width: `${progress2}%`,
              background: progress2 === 100 ? "var(--tw-prose-primary, #956BFF)" : "transparent"
            }}
          />
        </div>
      </div>
    </div>
  );
}
