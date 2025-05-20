import React, { useState } from "react";
import "./Test.css";

const Test = () => {
  const [productState, setProductState] = useState(false);
  const [servicesState, setServicesState] = useState(false);

  const handleProductState = () => {
    setProductState((prevValue) => {
      return !prevValue;
    });
  };

  const handleServicesState = () => {
    setServicesState(() => {
      if (servicesState === true) {
        return false;
      } else if (servicesState === false) {
        return true;
      }
    });
  };

  return (
    <div>
      <p>
        <a href="#">Home</a>
      </p>
      <p onClick={handleProductState}>
        <a href="#">Products</a>
      </p>
      <ul className={productState ? "display-block" : "display-none"}>
        <li>Bread</li>
        <li>Bacon</li>
        <li>Strawberry</li>
      </ul>
      <p>
        <a href="#" onClick={handleServicesState}>
          Services
        </a>
      </p>
      <ul className={servicesState ? "display-block" : "display-none"}>
        <li>Home Delivery</li>
        <li>Home Services</li>
      </ul>
    </div>
  );
};

export default Test;
