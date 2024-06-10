import { Button } from "../ui/button";
import RatingStars from "../RatingStars";
import { Link } from "react-router-dom";
import "@/components/styles/ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";

interface Rating {
  rate: number;
  count: number;
}

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
}

export default function ProductCard({
  id,
  title,
  price,
  description,
  image,
  rating,
}: ProductCardProps) {
  const count = useAppSelector((store) => store.cart.length);

  const dispatch = useAppDispatch();

  return (
    <div className="product-card-wrap">
      <Link to={`/products/${id}`}>
        <div className="img-wrap">
          <img src={image} alt={title} />
        </div>
        <div className="flex justify-between">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
        </div>
      </Link>
      <div>
        <p className="short-desc">{description}</p>
        <div className="rating-wrap">
          <div className="py-4 flex gap-2">
            <RatingStars rating={rating.rate} />
            <span>({rating.count})</span>
          </div>
        </div>
      </div>
      <p>Count {count}</p>
      <div>
        {/* <Button variant={"outline"} onClick={() => dispatch(addToCart(id))}> */}
        <Button variant={"outline"}>Add to Card</Button>
      </div>
    </div>
  );
}
