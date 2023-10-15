// import React from "react";
import "./FeaturedProduct.scss";
import PurchaseCard from "../card/purchaseCard/PurchaseCard";
import SectionHeader from "../sectionHeader/SectionHeader";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      title: "Garlic",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s9u1t0ad3ttssgfm2xss",
      price: 183,
      rating: 3,
      deliveryTime: 34,
    },
    {
      id: 2,
      title: "Orange - Canned, Mandarin",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/abdbc9a2f3db3a69d6a8362a4fc21dc4",
      price: 533,
      rating: 4.8,
      deliveryTime: 49,
    },
    {
      id: 3,
      title: "Lemonade - Island Tea, 591 Ml",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/abdbc9a2f3db3a69d6a8362a4fc21dc4",
      price: 140,
      rating: 4.6,
      deliveryTime: 47,
    },
  ];
  return (
    <>
      <div className="mt-11 pt-28 pb-14">
        <SectionHeader />
        <div
          className="flex flex-wrap items-center justify-evenly conatiner"
          id="featuredProduct"
        >
          {products.map((product) => (
            <PurchaseCard key={product.id} details={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
