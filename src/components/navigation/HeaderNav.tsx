import "@/components/styles/HeaderNav.css";
import BrandLogo from "@/assets/shopcart_logo.svg";
import { Button } from "../ui/button";
import { ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";

export default function HeaderNav() {
  return (
    <>
      <div className="header-nav-wrap">
        <div className="content-container">
          <div>
            <Link to={"/"}>
              <img src={BrandLogo} alt="Shop cart" />
            </Link>
          </div>
          <div className="header-right-blk">
            <Input className="header-search" type="text" placeholder="Search" />
            <Button variant={"ghost"} className="flex gap-2" asChild>
              <Link to="/profile">
                <UserRound width={"26"} height={"26"} />
                Profile
              </Link>
            </Button>
            <Button variant={"ghost"} className="flex gap-2">
              <ShoppingCart width={"26"} height={"26"} />
              Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
