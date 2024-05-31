import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface MiniProductCardProps {
  title: string;
  price: number;
  image: string;
}

export default function MiniProductCard({
  title,
  price,
  image,
}: MiniProductCardProps) {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <div className="cart-product-card">
      <div className="big-img">
        <img src={image} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <div className="quantity-blk-wrap">
          <div className="quantity-group">
            <Button
              variant={"ghost"}
              onClick={() => {
                if (productQuantity !== 1) {
                  setProductQuantity(productQuantity - 1);
                }
              }}
            >
              <Minus width={20} height={20} />
            </Button>
            <div className="quantity">
              <p>{productQuantity}</p>
            </div>
            <Button
              variant={"ghost"}
              onClick={() => {
                setProductQuantity(productQuantity + 1);
              }}
            >
              <Plus width={20} height={20} />
            </Button>
          </div>
        </div>
        <div className="action-blk-wrap">
          <Button
            variant={"outline"}
            //   onClick={}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
