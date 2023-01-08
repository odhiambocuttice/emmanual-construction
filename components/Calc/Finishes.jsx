import { useContext } from "react";
import Select from "react-select";
import { motion } from "framer-motion";

import { finishesTypes } from "../../data/finishesData.js";
import { DataContext } from "../../context/DataContext";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgb(17 24 39)",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "rgb(17 24 39)" : "white",
    paddingBottom: "8px",
    paddingTop: "8px",
    zIndex: "999",
  }),

  control: (provided) => ({
    ...provided,
    border: "1px solid rgb(17 24 39)",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "4px",
  }),
};

export const Finishes = () => {
  const { setFinishes } = useContext(DataContext);

  const handleChange = (e) => {
    setFinishes(e);
  };

  return (
    <Select
      options={finishesTypes}
      placeholder="Select Finishes Type"
      isClearable={true}
      isSearchable={true}
      styles={customStyles}
      className="text-sm font-light uppercase w-full z-[98] my-4 "
      onChange={handleChange}
    />
  );
};
