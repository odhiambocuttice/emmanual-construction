import { useState, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { DataContext } from "../../context/DataContext";

export const HouseArea = () => {
  const [open, setOpen] = useState(false);

  const {
    setHouseArea,
    HouseArea,
    setHeight,
    height,
    width,
    setWidth,
    floors,
    setFloors,
  } = useContext(DataContext);

  useEffect(() => {
    setHouseArea(height * width * floors);
  }, [height, width, floors, setHouseArea]);

  return (
    <motion.div
      className=" text-black flex justify-center uppercase items-center my-4 w-3/4 flex-col bg-white rounded-md p-2 text-center text-sm"
      layout
    >
      <h1
        className="uppercase w-full cursor-pointer text-gray-600"
        onClick={() => setOpen(!open)}
      >
        calculate total area of house
      </h1>

      <AnimatePresence>
        {open && (
          <AreaCalculation
            HouseArea={HouseArea}
            setHeight={setHeight}
            setWidth={setWidth}
            setFloors={setFloors}
            floors={floors}
            height={height}
            width={width}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AreaCalculation = ({
  HouseArea,
  setHeight,
  setWidth,
  setFloors,
  floors,
  height,
  width,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border-t-2 my-2 w-full"
    >
      <div className="flex my-2 justify-center items-center text-right">
        <div className="flex flex-col gap-6">
          <h1 className="">No of Floors :</h1>
          <h1 className="">Width :</h1>
          <h1 className="">Length :</h1>
        </div>

        <div className="flex flex-col p-2 justify-center items-center">
          <input
            type="number"
            className="p-2 border-2 border-slate-600 rounded-md w-16 my-2 text-center"
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
            placeholder="0"
          />
          <input
            type="number"
            className="p-2 border-2 border-slate-600 rounded-md w-16 mb-2 text-center"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="0"
          />
          <input
            type="number"
            className="p-2 border-2 border-slate-600 rounded-md w-16  text-center"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="0"
          />
        </div>
        <p className="text-red-600 text-center p-2 w-1/4">{HouseArea} m²</p>
      </div>
    </motion.div>
  );
};
