import React, { FC } from "react";
import { formDataType } from "../Index";
import { IoIosCloudDone } from "react-icons/io";

interface SuccessStepProps {
  formData: formDataType;
}

const SuccessStep: FC<SuccessStepProps> = ({ formData }) => {
  return (
    <div className="step">
      <IoIosCloudDone className="m-auto" size={"4rem"} />
      <p>Form Submitted Successfully!</p>
    </div>
  );
};

export default SuccessStep;
