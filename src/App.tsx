import { useState } from "react";
import { components } from "./components/Index";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const App = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  return (
    <div className="app">
      <div className="components-wrapper">{components[componentIndex]}</div>

      <hr className="border border-primary w-4/5" />

      <div className="components-action">
        <div className="components-navigation">
          <button
            onClick={() => setComponentIndex((prev) => prev - 1)}
            disabled={componentIndex === 0}
            className="disabled:cursor-not-allowed"
          >
            <FaChevronLeft />
          </button>

          <div className="progress">
            {components.map((_, i) => {
              if (i === componentIndex) {
                return (
                  <FaRegCircleDot
                    key={i}
                    className="cursor-pointer"
                    onClick={() => setComponentIndex(i)}
                  />
                );
              }
              return (
                <GoDotFill
                  key={i}
                  className="cursor-pointer"
                  onClick={() => setComponentIndex(i)}
                />
              );
            })}
          </div>

          <button
            onClick={() => setComponentIndex((prev) => prev + 1)}
            disabled={componentIndex >= components.length - 1}
            className="disabled:cursor-not-allowed"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
