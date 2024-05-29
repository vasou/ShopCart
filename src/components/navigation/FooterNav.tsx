import { CircleHelp, Gift, Luggage } from "lucide-react";
import { Link } from "react-router-dom";
import "@/components/styles/FooterNav.css";
import FooterLogo from "@/assets/shopcart_logo.svg";
import Stripe from "@/assets/stripe.png";
import Visa from "@/assets/visa.png";
import MasterCard from "@/assets/Mastercard.png";
import AmazonPay from "@/assets/Amazon.png";
import Klarna from "@/assets/Klarna.png";
import PayPal from "@/assets/PayPal.png";
import ApplePay from "@/assets/ApplePay.png";
import GooglePay from "@/assets/ApplePay.png";

const DepartmentList = [
  {
    id: 1,
    name: "Fashion",
    link: "/department/fashion",
  },
  {
    id: 2,
    name: "Education Products",
    link: "/department/education-products",
  },
  {
    id: 3,
    name: "Frozen foods",
    link: "/department/frozen-foods",
  },
  {
    id: 4,
    name: "Beverages",
    link: "/department/beverages",
  },
  {
    id: 5,
    name: "Organic Groceries",
    link: "/department/organic-groceries",
  },
  {
    id: 6,
    name: "Office Supplies",
    link: "/department/office-supplies",
  },
  {
    id: 7,
    name: "Beauty Products",
    link: "/department/beauty-products",
  },
  {
    id: 8,
    name: "Books",
    link: "/department/books",
  },
  {
    id: 9,
    name: "Electronics & Gadgets",
    link: "/department/electronics-gadgets",
  },
  {
    id: 10,
    name: "Travel Accessories",
    link: "/department/travel-accessories",
  },
  {
    id: 11,
    name: "Fitness",
    link: "/department/fitness",
  },
  {
    id: 12,
    name: "Sneakers",
    link: "/department/sneakers",
  },
  {
    id: 13,
    name: "Toys",
    link: "/department/toys",
  },
  {
    id: 14,
    name: "Furniture",
    link: "/department/furniture",
  },
];

const AboutList = [
  {
    id: 1,
    name: "About Shopcart",
    link: "/about",
  },
  {
    id: 2,
    name: "Careers",
    link: "/careers",
  },
  {
    id: 3,
    name: "News & Blog",
    link: "/news-blog",
  },
  {
    id: 4,
    name: "Help",
    link: "/help",
  },
  {
    id: 5,
    name: "Press Center",
    link: "/press-center",
  },
  {
    id: 6,
    name: "Shop by Location",
    link: "/shop-by-location",
  },
  {
    id: 7,
    name: "Shopcart Bands",
    link: "/shopcart-brands",
  },
  {
    id: 8,
    name: "Affiliate & Partners",
    link: "/affiliate-partners",
  },
  {
    id: 9,
    name: "Ideas & Guides",
    link: "/ideas-guides",
  },
];

const ServicesList = [
  {
    id: 1,
    name: "Gift Card",
    link: "/services/gift-card",
  },
  {
    id: 2,
    name: "Mobile App",
    link: "/services/mobile-app",
  },
  {
    id: 3,
    name: "Shipping & Delivery",
    link: "/services/shipping-delivery",
  },
  {
    id: 4,
    name: "Order Pickup",
    link: "/services/order-pickup",
  },
  {
    id: 5,
    name: "Account Signup",
    link: "/services/register",
  },
];
const HelpList = [
  {
    id: 1,
    name: "Shopcart Help",
    link: "/help",
  },
  {
    id: 2,
    name: "Returns",
    link: "/returns",
  },
  {
    id: 3,
    name: "Track Orders",
    link: "/track-orders",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 5,
    name: "Feedback",
    link: "/feedback",
  },
  {
    id: 6,
    name: "Security & Fraud",
    link: "/security-fraud",
  },
];

const PaymentIcons = [
  {
    id: 1,
    img: Stripe,
    alt: "Stipe",
  },
  {
    id: 2,
    img: Visa,
    alt: "Visa",
  },
  {
    id: 3,
    img: MasterCard,
    alt: "Master Card",
  },
  {
    id: 4,
    img: AmazonPay,
    alt: "Amazon Pay",
  },
  {
    id: 5,
    img: Klarna,
    alt: "Klarna",
  },
  {
    id: 6,
    img: PayPal,
    alt: "PayPal",
  },
  {
    id: 7,
    img: ApplePay,
    alt: "ApplePay",
  },
  {
    id: 8,
    img: GooglePay,
    alt: "GooglePay",
  },
];

export default function FooterNav() {
  return (
    <footer className="footer-section">
      <div className="content-container">
        <div className="top">
          <div className="left">
            <img src={FooterLogo} alt="Brand logo" />
            <p className="pt-4 pb-8 text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <h4 className="footer-heading">Accepted Payments</h4>
            <div className="payment-icons-wrap">
              {PaymentIcons &&
                PaymentIcons.map((item) => {
                  return (
                    <div className="card" key={item.id}>
                      <img src={item.img} alt={item.alt} />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="right">
            <div>
              <h4 className="footer-heading">Department</h4>
              {DepartmentList &&
                DepartmentList.map((item) => {
                  return (
                    <Link to={item.link} key={item.id} className="footer-link">
                      {item.name}
                    </Link>
                  );
                })}
            </div>
            <div>
              <h4 className="footer-heading">About us</h4>
              {AboutList &&
                AboutList.map((item) => {
                  return (
                    <Link to={item.link} key={item.id} className="footer-link">
                      {item.name}
                    </Link>
                  );
                })}
            </div>
            <div>
              <h4 className="footer-heading">Services</h4>
              {ServicesList &&
                ServicesList.map((item) => {
                  return (
                    <Link to={item.link} key={item.id} className="footer-link">
                      {item.name}
                    </Link>
                  );
                })}
            </div>
            <div>
              <h4 className="footer-heading">Help</h4>
              {HelpList &&
                HelpList.map((item) => {
                  return (
                    <Link to={item.link} key={item.id} className="footer-link">
                      {item.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <Link to={""} className="footer-link">
              <Luggage width={"26"} height={"26"} className="footer-icon" />
              Become a seller
            </Link>
            <Link to={""} className="footer-link">
              <Gift width={"26"} height={"26"} className="footer-icon" />
              Gift cards
            </Link>
            <Link to={""} className="footer-link">
              <CircleHelp width={"26"} height={"26"} className="footer-icon" />
              Help center
            </Link>
          </div>
          <div className="right">
            <Link to={""} className="footer-link">
              Terms of service
            </Link>
            <Link to={""} className="footer-link">
              Privacy policy
            </Link>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
