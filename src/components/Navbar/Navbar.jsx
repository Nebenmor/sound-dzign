import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Sound<span className="red">DZing</span>
      </a>

      <ul>
        <li>
          <a href="#">Coure Details</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
