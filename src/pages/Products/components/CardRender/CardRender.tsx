import React, { useContext } from "react";
import { FilterContext } from "../../../../context/Filter";
import PurchaseCard from "../../../../components/card/purchaseCard/PurchaseCard";

const CardRender = () => {
  const { filterProduct } = useContext(FilterContext);

  return (
    <>
      {filterProduct.length > 0 &&
        filterProduct.map((item, index: React.Key) => (
          <PurchaseCard details={item} key={index} />
        ))}
    </>
  );
};

export default CardRender;
