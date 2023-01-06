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
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="my-4 w-full "
    >
      <motion.div variants={fadeInUp} className="w-full z-20 ">
        <Select
          options={finishesTypes}
          placeholder="Select Finishes Type"
          isClearable={true}
          isSearchable={true}
          styles={customStyles}
          className="uppercase w-full z-20"
          onChange={handleChange}
        />
      </motion.div>
    </motion.div>
  );
};
