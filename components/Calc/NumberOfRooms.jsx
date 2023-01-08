import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";

import { DataContext } from "../../context/DataContext";

export const NumberOfRooms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="flex p-2 gap-8 items-center rounded bg-white w-full text-sm text-center"
      layout
    >
      <h1
        className="text-gray-600 uppercase w-full cursor-pointer"
        onClick={toggleOpen}
      >
        Input number of BedRooms
      </h1>
      <AnimatePresence>{isOpen && <RoomsInput />}</AnimatePresence>
    </motion.div>
  );
};

const RoomsInput = () => {
  const { rooms, setRooms } = useContext(DataContext);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <input
        className="p-2 text-center border border-slate-600 rounded-md text-black w-24"
        type="number"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      />
    </motion.div>
  );
};
