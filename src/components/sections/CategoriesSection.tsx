import { Link } from "react-router-dom";
import Furnite from "@/assets/categories/Furniture-min.png";
import HandBag from "@/assets/categories/handbag-min.png";
import Books from "@/assets/categories/books-min.png";
import Tech from "@/assets/categories/tech-min.png";
import Sneakers from "@/assets/categories/sneakers-min.png";
import Travel from "@/assets/categories/travel-min.png";

const CategoryList = [
  {
    id: 1,
    name: "Furniture",
    img: Furnite,
    link: "/categories/furniture",
  },
  {
    id: 2,
    name: "Hand bag",
    img: HandBag,
    link: "/categories/hand-bag",
  },
  {
    id: 3,
    name: "Books",
    img: Books,
    link: "/categories/books",
  },
  {
    id: 4,
    name: "Tech",
    img: Tech,
    link: "/categories/tech",
  },
  {
    id: 5,
    name: "Sneakers",
    img: Sneakers,
    link: "/categories/sneakers",
  },
  {
    id: 6,
    name: "Travel",
    img: Travel,
    link: "/categories/travel",
  },
];

export default function CategoriesSection() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-heading">Shop Our Top Categories</h2>
        <div className="grid grid-cols-6 gap-4 max_lg:grid-cols-3 max_s:grid-cols-2 max_s:gap-2">
          {CategoryList &&
            CategoryList.map((item) => {
              return (
                <Link
                  to={item.link}
                  className="relative block rounded-lg overflow-hidden"
                  key={item.id}
                >
                  <p className="absolute top-4 left-0 right-0 text-center text-white text-2xl max_xl:text-xl font-semibold">
                    {item.name}
                  </p>
                  <img src={item.img} alt={item.name} className="w-full" />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
