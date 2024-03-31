import { useState } from "react";
import { components } from "./components/Index";

const App = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  return (
    <div className="app">
      <div className="components-wrapper">{components[componentIndex]}</div>

      <div className="components-action">
        {componentIndex === 0 && componentIndex < components.length - 1 ? (
          <div className="get-started">
            <button onClick={() => setComponentIndex(1)}>Get Started</button>
          </div>
        ) : (
          <div className="components-navigation">
            {componentIndex > 0 && (
              <button onClick={() => setComponentIndex((prev) => prev - 1)}>
                Back
              </button>
            )}
            {componentIndex < components.length - 1 && (
              <button onClick={() => setComponentIndex((prev) => prev + 1)}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
