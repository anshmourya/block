import React, { createContext, useState, useEffect } from "react";
import data from "../Product.json";

export const FilterContext = createContext({
  filterProduct: [],
});

interface Option {
  label: string;
  value: string | number | object;
  category: string;
  type: string;
}

export const FilterProvider: React.FC = ({ children }) => {
  const [product, setProduct] = useState(data);
  const [filterProduct, setFilterProduct] = useState<object[]>(product);
  const [selectedFilters, setSelectedFilters] = useState<Option[]>([]);

  // handle the filters based on the button either [select or checkboxes]
  const handleFilterSelect = (option: Option) => {
    if (option.type === "select") {
      const isOptionSelected = selectedFilters.some(
        (item: Option) =>
          item.category === option.category &&
          JSON.stringify(item.value) === JSON.stringify(option.value)
      );

      let updatedFilters;

      if (isOptionSelected) {
        // If the option is already selected, remove it
        updatedFilters = selectedFilters.filter(
          (item: Option) =>
            item.category !== option.category ||
            JSON.stringify(item.value) !== JSON.stringify(option.value)
        );
      } else {
        // If a new option is selected, remove any previous option in the same category and add the new option.
        updatedFilters = selectedFilters.filter(
          (item: Option) => item.category !== option.category
        );
        updatedFilters.push(option);
      }

      setSelectedFilters(updatedFilters);
    } else if (option.type === "checkbox") {
      if (
        selectedFilters.some(
          (item: Option) =>
            JSON.stringify(item.value) === JSON.stringify(option.value)
        )
      ) {
        const updatedFilters = selectedFilters.filter(
          (item: Option) =>
            JSON.stringify(item.value) !== JSON.stringify(option.value)
        );
        setSelectedFilters(updatedFilters);
      } else {
        setSelectedFilters([...selectedFilters, option]);
      }
    }
  };

  const applyFilters = () => {
    if (selectedFilters.length > 0) {
      const updatedFilteredHotel = product.filter((item) =>
        selectedFilters.every((filter) => {
          switch (filter.category) {
            case "price":
              return (
                item.price <= filter.value.max && item.price >= filter.value.min
              );
            case "rating":
              return item.rating >= filter.value;
            default:
              return true;
          }
        })
      );
      setFilterProduct(updatedFilteredHotel);
    } else {
      setFilterProduct(product);
    }
  };

  useEffect(() => {
    console.log(selectedFilters);
    applyFilters();
  }, [selectedFilters, product]);
  return (
    <FilterContext.Provider value={{ filterProduct, handleFilterSelect }}>
      {children}
    </FilterContext.Provider>
  );
};
