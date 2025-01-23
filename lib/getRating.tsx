import { GoStarFill, GoStar } from "react-icons/go";

export default function GetRatings({ value, className }: { value: number; className: string }) {
  const totalRatings = [0, 0, 0, 0, 0];
  for (let i = 0; i < Math.round(value); i++) {
    totalRatings[i] = 1;
  }
  return (
    <div className="flex items-center space-x-0.5">
      {totalRatings.map((rating, index) => {
        if (rating === 1) {
          return <GoStarFill key={index} className={className} />;
        }
        return <GoStar key={index} className={className} />;
      })}
    </div>
  );
}
