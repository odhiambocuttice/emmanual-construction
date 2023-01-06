import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

export const NumberOfRooms = () => {
  const { rooms, setRooms } = useContext(DataContext);
  return (
    <div className="rounded bg-white w-full">
      <div className="flex p-2 gap-8 items-center">
        <h1 className="text-gray-600 uppercase ">Input number of BedRooms</h1>
        <input
          className="p-2 border border-slate-600 rounded-md text-black"
          type="number"
          placeholder="0"
          value={rooms}
          onChange={(e) => setRooms(+e.target.value)}
        />
      </div>
    </div>
  );
};
