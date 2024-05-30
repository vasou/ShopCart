import RatingStars from "@/components/RatingStars";
import ProductDeliveryInfoCard from "@/components/card/ProductDeliveryInfoCard";
import PageLayout from "@/components/layout/PageLayout";
import "@/components/styles/ProductDetails.css";
import { Button } from "@/components/ui/button";
import { Circle, Minus, Package, Plus, Truck } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductsList } from "@/data/products";

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
  const params = useParams<{ id: string }>();
  const productId = Number(params.id);

  const product = ProductsList.find((product) => {
    return product.id === productId;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section>
        <div className="content-container">
          {product && (
            <div className="product-details-wrap">
              <div className="img-wrap">
                <div className="big-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="img-gallery">
                  {product.imageGallery?.map((item) => {
                    return (
                      <Button className="img-blk" key={item.id}>
                        <img src={item.img} alt="" width="100%" />
                      </Button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="product-content-wrap">
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <div className="rating-wrap">
                    <div className="py-4 flex gap-2">
                      <RatingStars rating={product.rating.rate} />
                      <span>({product.rating.count})</span>
                    </div>
                  </div>
                </div>
                <div className="price-blk-wrap">
                  <h2>${[product.price]}</h2>
                  <div className="emi-text-group">
                    <span>
                      EMI from ${(product.price / 6).toFixed(2)}. No cost EMI
                      available.
                    </span>
                    <Link to={""}>EMI options</Link>
                    <span>Inclusive of all taxes.</span>
                  </div>
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
                    <Button variant={"ghost"}>
                      <Minus width={34} height={34} />
                    </Button>
                    <div className="quantity">
                      <p>1</p>
                    </div>
                    <Button variant={"ghost"}>
                      <Plus width={34} height={34} />
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
                      <Truck
                        width={30}
                        height={30}
                        className="text-toneBrown"
                      />
                    </ProductDeliveryInfoCard>
                    <ProductDeliveryInfoCard
                      heading="Return delivery"
                      description="Free 30 days delivery returns"
                    >
                      <Package
                        width={30}
                        height={30}
                        className="text-toneBrown"
                      />
                    </ProductDeliveryInfoCard>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
