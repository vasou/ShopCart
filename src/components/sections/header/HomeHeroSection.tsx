import "@/components/styles/HomeHeroSection.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomeHeroSection() {
  return (
    <section className="home-hero-section">
      <div className="content-container grid grid-cols-2 max_lg:grid-cols-1">
        <div className="content">
          <div>
            <h1>Shopping And Department Store.</h1>
            <p className="desc">
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </p>
            <div>
              <Button variant={"default"} className="mega-button" asChild>
                <Link to={"/collections"}>Shop now</Link>
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
