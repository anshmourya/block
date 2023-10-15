import React, { useState } from "react";
import "./Select.scss";
import { IoIosArrowDown } from "react-icons/io";

interface SelectProps {
  label: string;
  options: object;
  onSelect: (option: object) => void;
  Inputclass?: string;
}
interface option {
  label: string;
  value: string | number | object;
  category: string;
  type: string;
}
const Select = ({
  label,
  options,
  onSelect,
  Inputclass,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [currentSelect, setCurrentSelect] = useState<null | string>(null);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handelValueChange = (value: string) => {
    currentSelect == value ? setCurrentSelect(null) : setCurrentSelect(value);
  };
  const handleOptionClick = (option: option) => {
    handelValueChange(option.label);
    onSelect && onSelect(option);
    handleOpen();
  };
  return (
    <>
      <div>
        <label>{label}</label>
        <div
          className={`customSelect ${open ? "active" : ""} ${Inputclass}`}
          {...rest}
        >
          <div className="selectLabel" onClick={handleOpen}>
            {label && <h6>{currentSelect ? currentSelect : label}</h6>}
            <div className="selectIcon">
              <IoIosArrowDown />
            </div>
          </div>
          <div
            style={open ? { display: "block" } : { display: "none" }}
            className="selectContentWrapper"
          >
            {options.map((option: option, index) => (
              <p
                key={index}
                className={`selectContent ${
                  option.label === currentSelect ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
