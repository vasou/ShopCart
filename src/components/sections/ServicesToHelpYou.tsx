import { Link } from "react-router-dom";
import FaqPeople from "@/assets/help/faq-people.png";
import OnlinePayment from "@/assets/help/online-payment.png";
import HomeDelivery from "@/assets/help/home-delivery.png";

const HelpList = [
  {
    id: 1,
    price: "Frequently Asked Questions",
    desc: "Updates on safe Shopping in our Stores",
    img: FaqPeople,
    link: "/offer/sofa",
  },
  {
    id: 2,
    price: "Online Payment Process",
    desc: "Updates on safe Shopping in our Stores",
    img: OnlinePayment,
    link: "/offer/books",
  },
  {
    id: 3,
    price: "Home Delivery Options",
    desc: "Updates on safe Shopping in our Stores",
    img: HomeDelivery,
    link: "/offer/shirt",
  },
];

export default function ServicesToHelpYou() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-heading">Services To Help You Shop</h2>
        <div className="grid grid-cols-3 gap-4 max_lg:grid-cols-2 max_sm:grid-cols-1">
          {HelpList &&
            HelpList.map((item) => {
              return (
                <Link
                  to={item.link}
                  className="rounded-lg bg-gray-100 overflow-hidden"
                  key={item.id}
                >
                  <div className="p-10 max_s:p-6">
                    <div className="w-[70%] max_lg:w-full min-h-32 max_lg:min-h-min">
                      <p className="pb-4 text-2xl max_lg:text-xl font-bold">
                        {item.price}
                      </p>
                      <p className="text-base ">{item.desc}</p>
                    </div>
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
