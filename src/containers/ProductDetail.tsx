import RatingStars from "@/components/RatingStars";
import ProductDeliveryInfoCard from "@/components/card/ProductDeliveryInfoCard";
import PageLayout from "@/components/layout/PageLayout";
import "@/components/styles/ProductDetails.css";
import { Button } from "@/components/ui/button";
import { Circle, Minus, Package, Plus, Truck } from "lucide-react";

// interface Rating {
//   rate: number;
//   count: number;
// }

// interface ProductDetailProps {
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   rating: Rating;

// }

export default function ProductDetail() {
  return (
    <PageLayout>
      <section>
        <div className="content-container">
          <div className="product-details-wrap">
            <div className="img-wrap">
              <div className="big-img">
                <img src="" alt="" />
              </div>
              <div className="img-gallery">
                <Button className="img-blk">
                  <img src="" alt="" />
                </Button>
                <Button className="img-blk">
                  <img src="" alt="" />
                </Button>
                <Button className="img-blk">
                  <img src="" alt="" />
                </Button>
                <Button className="img-blk">
                  <img src="" alt="" />
                </Button>
                <Button className="img-blk">
                  <img src="" alt="" />
                </Button>
                <Button className="img-blk">
                  <img src="" alt="" />
                </Button>
              </div>
            </div>
            <div>
              <div className="product-content-wrap">
                <h1>Airpods - Max</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat dolor laudantium earum, fuga amet sint! Soluta maxime
                  eum distinctio autem dolorum excepturi ea? Eaque alias unde
                  deleniti asperiores, sit fugiat.
                </p>
                <div className="rating-wrap">
                  <div className="py-4 flex gap-2">
                    <RatingStars rating={4} />
                    <span>(278)</span>
                  </div>
                </div>
              </div>
              <div className="price-blk-wrap">
                <h2>$549.00</h2>
                <span>EMI from $549. No cost EMI available.</span>
                <Button variant={"link"} className="pl-2 pr-1 text-base">
                  EMI options
                </Button>{" "}
                <span>Inclusive of all taxes.</span>
              </div>
              <div className="colors-blk-wrap">
                <h3>Choose a color</h3>
                <div className="colors-group">
                  <Button variant={"ghost"}>
                    <Circle width={40} height={40} />
                  </Button>
                </div>
              </div>
              <div className="quantity-blk-wrap">
                <div className="quantity-group">
                  <Button>
                    <Minus width={40} height={40} />
                  </Button>
                  <div className="quantity">
                    <p>1</p>
                  </div>
                  <Button>
                    <Plus width={40} height={40} />
                  </Button>
                </div>
                <div>
                  <p className="items-left">
                    <span>Only 12 items left!</span> Don't miss it
                  </p>
                </div>
              </div>
              <div className="content-75">
                <div className="action-blk-wrap">
                  <Button className="mega-button">Buy now</Button>
                  <Button variant={"outline"} className="mega-button">
                    Add to cart
                  </Button>
                </div>
                <div className="delivery-blk-wrap">
                  <ProductDeliveryInfoCard
                    heading="Free delivery"
                    description="Enter your postal code for delivery availability"
                  >
                    <Truck width={30} height={30} />
                  </ProductDeliveryInfoCard>
                  <ProductDeliveryInfoCard
                    heading="Return delivery"
                    description="Free 30 days delivery returns"
                  >
                    <Package width={30} height={30} />
                  </ProductDeliveryInfoCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
