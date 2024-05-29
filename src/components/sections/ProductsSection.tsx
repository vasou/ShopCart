import ProductCard from "../card/ProductCard";
import Product1 from "@/assets/products/laptop-sleeve-macbook.png";
import Product2 from "@/assets/products/airpod-max.png";
import Product3 from "@/assets/products/laptop-flower-sleeve.png";
import Product4 from "@/assets/products/supreme-water-bottle.png";
import Product5 from "@/assets/products/laptop-sleeve-macbook.png";
import Product6 from "@/assets/products/macbook-pro-13.png";
import Product7 from "@/assets/products/homepod-mini.png";
import Product8 from "@/assets/products/ipad-mini.png";

const ProductsList = [
  {
    id: 1,
    title: "Laptop sleeve MacBook",
    price: 59.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product1,
    rating: {
      rate: 5,
      count: 120,
    },
  },
  {
    id: 2,
    title: "AirPods Max",
    price: 559.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product2,
    rating: {
      rate: 3,
      count: 220,
    },
  },
  {
    id: 3,
    title: "AirPods Max",
    price: 39.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product3,
    rating: {
      rate: 4,
      count: 140,
    },
  },
  {
    id: 4,
    title: "AirPods Max",
    price: 19.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product4,
    rating: {
      rate: 5,
      count: 350,
    },
  },
  {
    id: 5,
    title: "AirPods Max",
    price: 59.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product5,
    rating: {
      rate: 5,
      count: 430,
    },
  },
  {
    id: 6,
    title: "AirPods Max",
    price: 1099.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product6,
    rating: {
      rate: 4,
      count: 830,
    },
  },
  {
    id: 7,
    title: "AirPods Max",
    price: 59.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product7,
    rating: {
      rate: 2,
      count: 230,
    },
  },
  {
    id: 8,
    title: "AirPods Max",
    price: 539.0,
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit",
    category: "category",
    image: Product8,
    rating: {
      rate: 3,
      count: 370,
    },
  },
];

export default function ProductsSection() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-heading">Today's best deals for you!</h2>
        <div className="grid grid-cols-4 gap-10 max_xl:grid-cols-3 max_md:grid-cols-2 max_s:grid-cols-1">
          {ProductsList &&
            ProductsList.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  rating={item.rating}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
