import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [shouldScroll, setShouldScroll] = useState(true);

//   useEffect(() => {
//     // Function to add a new message
//     function newMsg() {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         `Message ${prevMessages.length}`,
//       ]);
//     }

//     // Add a new message every 0.5 seconds (500 milliseconds)
//     const interval = setInterval(newMsg, 700);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   // Function to check if we should scroll to the bottom
//   const checkScroll = () => {
//     const panel = document.getElementById("panel-body");

//     if (
//       panel.clientHeight + panel.scrollTop === panel.scrollHeight - 0.5 ||
//       panel.clientHeight + panel.scrollTop === panel.scrollHeight
//     ) {
//       setShouldScroll(true);
//     } else if (panel.clientHeight + panel.scrollTop < panel.scrollHeight) {
//       setShouldScroll(false);
//     }
//   };

//   useEffect(() => {
//     const panel = document.getElementById("panel-body");

//     if (shouldScroll) {
//       panel.scrollTop = panel.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className="App">
//       <div id="panel-body" className="panel-body" onScroll={checkScroll}>
//         {messages.map((message, index) => (
//           <div key={index} className="msg">
//             {message}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
