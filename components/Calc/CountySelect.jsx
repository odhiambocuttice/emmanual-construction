import { useContext } from "react";
import Select from "react-select";
import { motion } from "framer-motion";

import { DataContext } from "../../context/DataContext";
import { countiesOfKenya } from "../../data/countiesData.js";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgb(17 24 39)",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "rgb(17 24 39)" : "white",
    paddingBottom: "6px",
    paddingTop: "6px",
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

export const CountySelect = () => {
  const { setCounty } = useContext(DataContext);
  console.log(setCounty);

  const handleChange = (e) => {
    setCounty(e);
  };

  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.8, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };

  return (
    <Select
      options={countiesOfKenya}
      placeholder="Select County"
      isClearable={true}
      isSearchable={true}
      styles={customStyles}
      className="text-sm font-light uppercase w-3/4 z-[99]"
      onChange={handleChange}
    />
  );
};
