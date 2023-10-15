// import React from "react";
import Button from "../../button/Button";
import "./PurchaseCard.scss";
import Rating from "./Rating/Rating";

interface productDetails {
  details: {
    title: string;
    image: string;
    price: number;
    deliveryTime: number;
    rating: number;
  };
}
const PurchaseCard = ({ details }: productDetails) => {
  const { title, image, price, deliveryTime, rating } = details;
  return (
    <>
      <div>
        <div className="max-w-[296px] max-h-[400px] p-3 product-card border border-transparent transition-all cursor-pointer my-3">
          <img
            src={image || "./logo.png"}
            alt={title || "logo"}
            className="w-[254px] h-[160px] object-contain m-auto rounded-md"
          />
          <span className="block my-2 text-lg semi-subtitle">
            {title || "dummy title 600"}
          </span>
          <span className="block mb-5 text-sm text-gray-400">
            Pizza, Fast Food, Beverag
          </span>
          <div className="flex items-center justify-between text-sm font-semibold text-gray-600">
            {/* //fixing the numbe to the only one Number */}
            <Rating rating={rating.toFixed(1)} />
            <span className="text-xs font-normal">
              {deliveryTime || 20} MINS
            </span>{" "}
            <span className="text-xs font-normal">
              &#8377; {price || 200} FOR ONE
            </span>
          </div>
          {/* <Link to={`/detail/${id}`}> */}
          <Button className="cart border-t w-[100%] mt-4" variant="link">
            QUICK VIEW
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default PurchaseCard;
