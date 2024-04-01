import React, { useMemo, useState } from "react";
import "./styles.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import SuccessStep from "./Steps/SuccessStep";
import { FiLoader } from "react-icons/fi";
import { IoReload } from "react-icons/io5";

export type formDataType = {
  email: string;
  age: number;
  username: string;
  password: string;
};

const initialFormData = {
  email: "johndoe@example.com",
  age: 30,
  password: "1234",
  username: "johndoe",
};

const MultiStep = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCompleted(true);
      setIsLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setCompleted(false);
    setFormData(initialFormData);
    setStepIndex(0);
  };

  const steps = [
    <Step1 email={formData.email} handleChange={handleChange} />,
    <Step2 age={formData.age} handleChange={handleChange} />,
    <Step3
      username={formData.username}
      password={formData.password}
      handleChange={handleChange}
    />,
  ];

  return (
    <div className="multi-step-component">
      <div className="wrapper">
        <div className="heading">
          <h3>Multi-Step Form</h3>
          {!completed && (
            <p className="text-center">
              Steps {stepIndex + 1} / {steps.length}
            </p>
          )}
        </div>

        <div className="steps">
          {!completed && !isLoading && <>{steps[stepIndex]}</>}

          {isLoading && (
            <p>
              <FiLoader className="m-auto" />
              Loading
            </p>
          )}
          {completed && <SuccessStep formData={formData} />}
        </div>
        {!completed && !isLoading && (
          <div className="steps-action">
            {stepIndex !== 0 ? (
              <button onClick={() => setStepIndex((prev) => prev - 1)}>
                Previous
              </button>
            ) : (
              <p></p>
            )}
            {stepIndex === steps.length - 1 ? (
              <button
                className="bg-highlight text-light"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button onClick={() => setStepIndex((prev) => prev + 1)}>
                Next
              </button>
            )}
          </div>
        )}
        {completed && (
          <button
            className="border border-primary bg-primary text-light flex items-center"
            onClick={resetForm}
          >
            <IoReload className="inline mr-2" />
            Go Again
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStep;
