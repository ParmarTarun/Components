import React, { FC } from "react";

interface Step3Props {
  username: string;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step3: FC<Step3Props> = ({ username, password, handleChange }) => {
  return (
    <div className="step">
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="johndoe"
          value={username}
          onChange={handleChange}
          className="text-center"
        />
      </div>
      <div className="form-control mt-4">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="*****"
          value={password}
          className="text-center"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Step3;
