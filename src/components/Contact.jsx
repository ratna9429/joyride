import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: "pink" }}>
      Contact
      <br />
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default Contact;
