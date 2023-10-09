import React, { useState } from "react";
import "./tour.css";

const Tour = ({ steps, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

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

  const skipTour = () => {
    onClose();
  };

  const step = steps[currentStep];

  return (
    <div className="tour-overlay">
      <div className="tour-box">
        <div className="tour-content">
          <h2>{step.title}</h2>
          <p>{step.content}</p>
        </div>
        <div className="tour-navigation">
          <button onClick={skipTour}>SKIP</button>
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
        <div className="tour-arrow"></div>
        <button className="tour-close" onClick={onClose}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default Tour;
