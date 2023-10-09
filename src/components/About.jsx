import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: "green" }}>
      About
      <br />
      <Link to="/contact">
        <button>Go to Contact</button>
      </Link>
    </div>
  );
};

export default About;
