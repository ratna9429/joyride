import React, { useEffect, useState } from "react";
import "./tour.css";

const Tour = ({ steps, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  useEffect(() => {
    // Handle step changes or other side effects here
  }, [currentStep, steps]);

  const arrowStyle = {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderColor: "transparent",
  };

  switch (step.arrowPosition) {
    case "left":
      arrowStyle.borderRightWidth = "10px";
      arrowStyle.borderRightColor = "white";
      arrowStyle.left = "-20px";
      arrowStyle.top = "50%";
      arrowStyle.transform = "translateY(-50%)";
      break;
    case "right":
      arrowStyle.borderLeftWidth = "10px";
      arrowStyle.borderLeftColor = "white";
      arrowStyle.right = "-100px";
      arrowStyle.left = "340px";
      arrowStyle.top = "7%";
      arrowStyle.transform = "translateY(400%)";
      break;
    case "bottom":
      arrowStyle.borderTopWidth = "10px";
      arrowStyle.borderTopColor = "white";
      arrowStyle.top = "224px";
      arrowStyle.left = "50%";
      arrowStyle.transform = "translateX(-50%)";
      break;
    case "top":
    default:
      arrowStyle.borderBottomWidth = "10px";
      arrowStyle.borderBottomColor = "white";
      arrowStyle.top = "-20px";
      arrowStyle.left = "50%";
      arrowStyle.transform = "translateX(-50%)";
      break;
  }

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
        <div className="tour-arrow" style={arrowStyle}></div>
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
