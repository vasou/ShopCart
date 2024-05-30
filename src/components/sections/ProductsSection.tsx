import ProductCard from "../card/ProductCard";
import { ProductsList } from "@/data/products";

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
                  id={item.id}
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
