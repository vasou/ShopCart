import { Link } from "react-router-dom";
import Staples from "@/assets/brands/staples.png";
import Sproutes from "@/assets/brands/sprouts.png";
import GroceryOutlet from "@/assets/brands/grocery-outlet.png";
import Mollie from "@/assets/brands/moullie.png";
import SportsBasement from "@/assets/brands/sport-basement.png";
import ContainerStore from "@/assets/brands/container-base.png";
import Target from "@/assets/brands/target.png";
import Bevmo from "@/assets/brands/bevmo.png";

const CategoryList = [
  {
    id: 1,
    name: "Staples",
    desc: "Delivery with in 24 hours",
    img: Staples,
    link: "/brands/staples",
  },
  {
    id: 2,
    name: "Sprouts",
    desc: "Delivery with in 24 hours",
    img: Sproutes,
    link: "/brands/sprouts",
  },
  {
    id: 3,
    name: "Grocery outlet",
    desc: "Delivery with in 24 hours",
    img: GroceryOutlet,
    link: "/brands/grocery-outlet",
  },
  {
    id: 4,
    name: "Mollie stones",
    desc: "Delivery with in 24 hours",
    img: Mollie,
    link: "/brands/mollie-stones",
  },
  {
    id: 5,
    name: "Sports Basement",
    desc: "Delivery with in 24 hours",
    img: SportsBasement,
    link: "/brands/sports-basement",
  },
  {
    id: 6,
    name: "Container Store",
    desc: "Delivery with in 24 hours",
    img: ContainerStore,
    link: "/brands/container-store",
  },
  {
    id: 7,
    name: "Target",
    desc: "Delivery with in 24 hours",
    img: Target,
    link: "/brands/target",
  },
  {
    id: 8,
    name: "Bevmo!",
    desc: "Delivery with in 24 hours",
    img: Bevmo,
    link: "/brands/bevmo",
  },
];

export default function ChooseByBrand() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-heading">Choose By Brand</h2>
        <div className="grid grid-cols-4 gap-4 max_2xl:grid-cols-3 max_lg:grid-cols-2 max_sm:grid-cols-1">
          {CategoryList &&
            CategoryList.map((item) => {
              return (
                <Link
                  to={item.link}
                  className="p-4 rounded-lg bg-gray-100"
                  key={item.id}
                >
                  <div className="flex items-center gap-4">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <p className="text-lg font-bold">{item.name}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
