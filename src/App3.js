import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound"; // Ispravljeno ime komponente
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App3() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Ispravljeno ime komponente */}
      </Routes>
    </Router>
  );
}

export default App3;
