import { useContext } from "react";
import Select from "react-select";
import { motion } from "framer-motion";

import { roofTypes } from "../../data/roofTypeData.js";
import { DataContext } from "../../context/DataContext";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgb(17 24 39)",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "rgb(17 24 39)" : "white",
    paddingBottom: "8px",
    paddingTop: "8px",
    zIndex: "-999",
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

export const RoofType = () => {
  const { setRoofType } = useContext(DataContext);

  const handleChange = (e) => {
    setRoofType(e);
  };


  return (
    <Select
      options={roofTypes}
      placeholder="Select Roof Type"
      isClearable={true}
      isSearchable={true}
      styles={customStyles}
      className="uppercase text-sm font-light w-full z-50 "
      onChange={handleChange}
    />
  );
};
