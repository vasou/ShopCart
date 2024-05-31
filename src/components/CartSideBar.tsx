import { CircleX } from "lucide-react";
import "@/components/styles/CartSideBar.css";
import { Button } from "./ui/button";
// import { ProductsList } from "@/data/products";
import MiniProductCard from "./card/MiniProductCard";

interface CartSideBarProps {
  status: boolean;
  handleChange: () => void;
}

export default function CartSideBar({
  status,
  handleChange,
}: CartSideBarProps) {
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
          <MiniProductCard title="Check" price={29.0} image="" />
        </div>
      )}
    </>
  );
}
