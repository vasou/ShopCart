import { Link } from "react-router-dom";
import Furniture from "@/assets/products/furniture-village-min.png";
import Fashion from "@/assets/products/fashion-world-min.png";
import { Button } from "../ui/button";

const ProductsList = [
  {
    id: 1,
    price: "Furniture Village",
    desc: "Delivery with in 24 hours",
    img: Furniture,
    link: "/trending/furniture",
  },
  {
    id: 2,
    price: "Fashion World",
    desc: "Delivery with in 24 hours",
    img: Fashion,
    link: "/trending/fashion",
  },
];

export default function TrendingProductsSection() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-heading">Trending Products For You!</h2>
        <div className="grid grid-cols-2 gap-4 max_sm:grid-cols-1">
          {ProductsList &&
            ProductsList.map((item) => {
              return (
                <div
                  className="rounded-lg bg-gray-100 overflow-hidden"
                  key={item.id}
                >
                  <div>
                    <img src={item.img} className="w-full" />
                  </div>
                  <div className="p-10 max_s:p-6">
                    <p className="pb-2 text-2xl max_lg:text-xl font-bold">
                      {item.price}
                    </p>
                    <p className="pb-6 text-base">{item.desc}</p>
                    <Button asChild>
                      <Link to={item.link} className="mega-button">
                        Shop now
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
