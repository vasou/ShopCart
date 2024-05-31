import { CircleX } from "lucide-react";
import "@/components/styles/CartSideBar.css";
import { Button } from "./ui/button";
import { ProductsList } from "@/data/products";
import MiniProductCard from "./card/MiniProductCard";

interface CartSideBarProps {
  status: boolean;
  handleChange: () => void;
}

export default function CartSideBar({
  status,
  handleChange,
}: CartSideBarProps) {
  const savedProducts = [1013947294, 1013947238];

  const filterProducts = ProductsList.filter((item) =>
    savedProducts.includes(item.id)
  );

  return (
    <>
      {status && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>Your cart</h2>
            <Button variant={"ghost"} onClick={handleChange}>
              <CircleX width={26} height={26} />
            </Button>
          </div>
          <div className="mini-product-list-wrap">
            {filterProducts.map((product) => {
              return (
                <MiniProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
