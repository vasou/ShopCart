import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const stars = Array(5).fill(0);

  return (
    <div className="flex gap-1">
      {stars.map((_, index) => {
        return (
          <Star
            key={index}
            width={20}
            height={20}
            color={rating > index ? "green" : "gray"}
          />
        );
      })}
    </div>
  );
}
