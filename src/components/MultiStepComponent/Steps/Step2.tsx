import React, { FC } from "react";

interface Step2Props {
  age: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: FC<Step2Props> = ({ age, handleChange }) => {
  return (
    <div className="step">
      <div className="form-control">
        <label htmlFor="age">Age</label>
        <br />
        <input
          type="range"
          name="age"
          min={18}
          max={45}
          step={1}
          value={age}
          onChange={handleChange}
          className="border-none"
        />
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Step1;
