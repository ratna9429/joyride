import React, { useEffect } from "react";
import "./tour.css";

const Tour = ({ steps, onClose }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const step = steps[currentStep];

  useEffect(() => {
    // Handle step changes or other side effects here
  }, [currentStep, steps]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="tour-overlay">
      <div className="blurred-overlay"></div>
      <div className="tour-box" style={{ top: step.y, left: step.x }}>
        <div className="tour-content">
          <h2>{step.title}</h2>
          <p>{step.content}</p>
        </div>
        <div className="tour-navigation">
          <button onClick={onClose}>SKIP</button>
          <button onClick={prevStep} disabled={currentStep === 0}>
            BACK
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            NEXT
          </button>
        </div>
        <button className="tour-close" onClick={onClose}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default Tour;
