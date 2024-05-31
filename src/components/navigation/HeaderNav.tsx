import "@/components/styles/HeaderNav.css";
import BrandLogo from "@/assets/shopcart_logo.svg";
import { Button } from "../ui/button";
import { Menu, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import CartSideBar from "../CartSideBar";
import { useState } from "react";

export default function HeaderNav() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleChange = () => {
    setCartOpen((prev) => !prev);
  };

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
            <div className="flex max_md:hidden">
              <Input
                className="header-search"
                type="text"
                placeholder="Search"
              />
              <Button variant={"ghost"} className="flex gap-2" asChild>
                <Link to="/profile">
                  <UserRound width={"26"} height={"26"} />
                  Profile
                </Link>
              </Button>
            </div>
            <div className="hidden max_md:block">
              <Button variant={"ghost"} className="flex gap-2">
                <Menu width={"26"} height={"26"} />
                Menu
              </Button>
            </div>
            <div className="max_s:hidden">
              <Button
                variant={"ghost"}
                className="flex gap-2"
                onClick={handleChange}
              >
                <ShoppingCart width={"26"} height={"26"} />
                Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CartSideBar status={cartOpen} handleChange={handleChange} />
    </>
  );
}
