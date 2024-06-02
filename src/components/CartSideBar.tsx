import { CircleX } from "lucide-react";
import "@/components/styles/CartSideBar.css";
import { Button } from "./ui/button";
import { ProductsList } from "@/data/products";
import MiniProductCard from "./card/MiniProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface CartSideBarProps {
  status: boolean;
  handleChange: () => void;
}

export default function CartSideBar({
  status,
  handleChange,
}: CartSideBarProps) {
  // const savedProducts = [{ id: 1013947294 }, { id: 1013947238 }];

  const cart = useSelector((state: RootState) => state.cart.products);
  console.log(cart);

  const filterProducts = cart.map((fullItem) =>
    ProductsList.filter((selectedItem) => selectedItem.id === fullItem.id)
  );
  console.log(filterProducts);

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
            {filterProducts.map((product, item) => {
              return (
                <MiniProductCard
                  key={item}
                  title={product[0].title}
                  price={product[0].price}
                  image={product[0].image}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
