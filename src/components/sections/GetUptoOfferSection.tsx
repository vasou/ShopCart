import { Link } from "react-router-dom";
import "@/components/styles/OfferColors.css";
import Sofa from "@/assets/offers/sofa.png";
import Book from "@/assets/offers/book.png";
import Shirt from "@/assets/offers/shirt.png";
import BagsBooks from "@/assets/offers/bags-books.png";

const OffersList = [
  {
    id: 1,
    price: "100",
    desc: "Explore Our Furniture & Home Furnishing Range",
    color: "yellow",
    img: Sofa,
    link: "/offer/sofa",
  },
  {
    id: 2,
    price: "29",
    desc: "Explore Our Furniture & Home Furnishing Range",
    color: "red",
    img: Book,
    link: "/offer/books",
  },
  {
    id: 3,
    price: "67",
    desc: "Explore Our Furniture & Home Furnishing Range",
    color: "brown",
    img: Shirt,
    link: "/offer/shirt",
  },
  {
    id: 4,
    price: "59",
    desc: "Explore Our Furniture & Home Furnishing Range",
    color: "green",
    img: BagsBooks,
    link: "/offer/bags-books",
  },
];

export default function GetUptoOfferSection() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-heading">Get Up To 70% Off</h2>
        <div className="grid grid-cols-4 gap-4 max_2xl:grid-cols-3 max_lg:grid-cols-2 max_sm:grid-cols-1">
          {OffersList &&
            OffersList.map((item) => {
              return (
                <Link
                  to={item.link}
                  className={`rounded-lg bg-gray-100 overflow-hidden ${
                    item.color === "yellow" && "offer-bg-yellow"
                  } ${item.color === "red" && "offer-bg-red"} ${
                    item.color === "brown" && "offer-bg-brown"
                  } ${item.color === "green" && "offer-bg-green"}`}
                  key={item.id}
                >
                  <div className="p-8">
                    <h2 className="text-xl text-gray-600 font-semibold">
                      Save
                    </h2>
                    <div className="py-2 flex items-start pb-6">
                      <p
                        className={`text-2xl ${
                          item.color === "yellow" && "offer-yellow"
                        } ${item.color === "red" && "offer-red"} ${
                          item.color === "brown" && "offer-brown"
                        } ${
                          item.color === "green" && "offer-green"
                        } font-semibold`}
                      >
                        $
                      </p>
                      <p
                        className={`text-[56px] leading-[56px] max_xl:text-9xl max_md:text-8xl font-bold ${
                          item.color === "yellow" && "offer-yellow"
                        } ${item.color === "red" && "offer-red"} ${
                          item.color === "brown" && "offer-brown"
                        } ${item.color === "green" && "offer-green"}`}
                      >
                        {item.price}
                      </p>
                    </div>
                    <p className="text-lg max_md:text-base">{item.desc}</p>
                  </div>
                  <div>
                    <img src={item.img} className="w-full" />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
