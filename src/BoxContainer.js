import React, { useState } from "react";
import Box from "./Box.js";

const BoxContainer = () => {
  const [boxList, setboxList] = useState(
    Array.from(Array(25), (_, x) => x + 1)
  );

  const randomizeBox = () => {
    setboxList(shuffle());
  };

  const shuffle = () => {
    let array = Array.from(Array(25), (_, x) => x + 1);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <div className="OuterContainer">
        <div className="InnerContainer">
          {boxList.map((num, index) => (
            <Box text={num} key={index} />
          ))}
        </div>
      </div>
      <button onClick={randomizeBox}>Randomize</button>
    </>
  );
};

export default BoxContainer;
