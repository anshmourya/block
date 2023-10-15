import React, { useContext } from "react";
import Select from "../../../../components/Input/Select/Select";
import CardRender from "../CardRender/CardRender";
import { FilterContext } from "../../../../context/Filter";

const FIlter = () => {
  const { handleFilterSelect } = useContext(FilterContext);
  const Filters = [
    {
      title: "price",
      type: "select",
      options: [
        {
          label: "₹0-200",
          value: { min: 0, max: 200 },
          category: "price",
          type: "select",
        },
        {
          label: "₹200-600",
          value: { min: 200, max: 600 },
          category: "price",
          type: "select",
        },
        {
          label: "₹600-1000",
          value: { min: 600, max: 1000 },
          category: "price",
          type: "select",
        },
      ],
    },
    {
      title: "Rating",
      type: "select",

      options: [
        { label: "5", value: 5, category: "rating", type: "select" },
        { label: "4", value: 4, category: "rating", type: "select" },
        { label: "3", value: 3, category: "rating", type: "select" },
        { label: "2", value: 2, category: "rating", type: "select" },
        { label: "1", value: 1, category: "rating", type: "select" },
      ],
    },
  ];
  const onSelect = (option: object) => {
    handleFilterSelect(option);
  };
  return (
    <>
      <div className="container grid grid-cols-2 gap-9 my-11">
        {Filters.map((option, index) => (
          <Select
            key={index}
            label={option.title}
            options={option.options}
            onSelect={onSelect}
          />
        ))}
      </div>
      <div className="container grid grid-cols-1 m-auto gap-9 my-11 md:grid-cols-3 lg:grid-cols-4 ">
        <CardRender />
      </div>
    </>
  );
};

export default FIlter;
