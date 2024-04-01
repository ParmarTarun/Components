import React, { FC } from "react";

interface Steps1Props {
  email: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: FC<Steps1Props> = ({ email, handleChange }) => {
  return (
    <div className="step">
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="johndoe@example.com"
            className="text-center"
            value={email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
