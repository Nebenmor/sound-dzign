import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  mixingConsole,
  mixing,
  mastering,
  bgElement1,
} from "../../assets/index";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
       
        <img src={bgElement1} alt="bgElement1" className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
