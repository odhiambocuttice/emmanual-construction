import { CountySelect } from "./CountySelect";
import { HouseArea } from "./HouseArea";
import { NumberOfRooms } from "./NumberOfRooms";
import { RoofType } from "./RoofType";
import { Finishes } from "./Finishes";
import { RegistrationForm } from "./RegistrationForm";
import { AnimateSharedLayout } from "framer-motion";

const Calculator = () => {
  return (
    <AnimateSharedLayout>
      <div className="flex justify-center items-center flex-col rounded-md m-4 ">
        <div className="w-full flex flex-col justify-center items-center bg-gray-200 py-4 rounded-lg lg:px-12 px-5 md:px-12">
          <h1 className="text-center text-xs uppercase py-2 text-gray-600 ">
            Construction Cost Details
          </h1>

          <CountySelect />
          <Finishes />
          <RoofType />
          <HouseArea />
          <NumberOfRooms />
        </div>
        <RegistrationForm />
      </div>
    </AnimateSharedLayout>
  );
};

export default Calculator;
