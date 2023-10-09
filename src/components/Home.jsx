import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tour from "./Tour"; // assuming Tour component is in a separate file

const Home = () => {
  const [isTourOpen, setIsTourOpen] = useState(true);

  const closeTour = () => {
    setIsTourOpen(false);
  };

  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: "blue" }}>
      Home
      <br />
      <Link to="/about">
        <button onClick={() => setIsTourOpen(true)}>Go to About</button>
      </Link>
      {isTourOpen && (
        <Tour
          message="Click on this button to go to About Page."
          onClose={closeTour}
        />
      )}
    </div>
  );
};

export default Home;
