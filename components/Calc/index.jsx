import { CountySelect } from "./CountySelect";
import { HouseArea } from "./HouseArea";
import { NumberOfRooms } from "./NumberOfRooms";
import { RoofType } from "./RoofType";
import { Finishes } from "./Finishes";
import { RegistrationForm } from "./RegistrationForm";

const Calculator = () => {
  return (
    <div className=" text-base">
      <h1 className="text-center text-xs uppercase p-5">
        Construction Cost Details
      </h1>
      <CountySelect />
      <HouseArea />
      <NumberOfRooms />
      <Finishes />
      <RoofType />
      <RegistrationForm />
    </div>
  );
};

export default Calculator;
