import RatingStars from "@/components/RatingStars";
import ProductDeliveryInfoCard from "@/components/card/ProductDeliveryInfoCard";
import PageLayout from "@/components/layout/PageLayout";
import "@/components/styles/ProductDetails.css";
import { Button } from "@/components/ui/button";
import { Minus, Package, Plus, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductsList } from "@/data/products";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch } from "react-redux";
import { increaseAmount } from "@/state/cart/cartSlice";
interface valueTypes {
  id: number;
  quantity: number;
}

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const productId = Number(params.id);

  const [productQuantity, setProductQuantity] = useState(1);

  const [productCart, setProductCart] = useState<valueTypes>({
    id: 0,
    quantity: 0,
  });

  const product = ProductsList.find((product) => {
    return product.id === productId;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function AddtoCart() {
    console.log("Added to cart");
    setProductCart({ id: productId, quantity: productQuantity });
    console.log(productCart);
  }

  const dispatch = useDispatch();

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
                    <RadioGroup defaultValue={"red"}>
                      {product.colors.map((item) => {
                        return (
                          <RadioGroupItem
                            key={item.id}
                            value={item.value}
                            id={item.value}
                            // checked={item.value === "blue"}
                            style={{ backgroundColor: item.color }}
                          />
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
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
                      <Minus width={34} height={34} />
                    </Button>
                    <div className="quantity">
                      <p>{productQuantity}</p>
                    </div>
                    <Button
                      variant={"ghost"}
                      onClick={() => {
                        dispatch(increaseAmount({ product }));
                      }}
                    >
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
                    <Button
                      variant={"outline"}
                      className="mega-button"
                      onClick={AddtoCart}
                    >
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
