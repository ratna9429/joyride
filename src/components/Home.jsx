import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tour from "./Tour"; // assuming Tour component is in a separate file

const Home = () => {
  const [isTourOpen, setIsTourOpen] = useState(true);

  const steps = [
    {
      title: "Step 1",
      content: "This is the first step.",
      target: "#step-1", // CSS selector for the targeted component
    },
    {
      title: "Step 2",
      content: "This is the second step.",
      target: "#step-2", // CSS selector for the targeted component
    },
  ];

  const closeTour = () => {
    setIsTourOpen(false);
  };

  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: "blue" }}>
      Home
      <br />
      <Link to="/about">
        <button onClick={() => setIsTourOpen(true)} id="step-1">
          Go to About
        </button>
      </Link>
      {isTourOpen && <Tour steps={steps} onClose={closeTour} />}
    </div>
  );
};

export default Home;
