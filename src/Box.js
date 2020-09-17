import React, { useReducer } from "react";
import { motion } from "framer-motion";

const ACTIONS = {
  TOGGLE_ON: "toggleOn",
  TOGGLE_BG: "toggleBg",
};

const colorOn = {
  background: "#6200EE",
  font: "#FFFFFF",
  fontSize: "1.8rem",
};

const colorOff = {
  background: "#FFFFFF",
  font: "#aaa",
  fontSize: "1.2rem",
};

const size = {
  width: "3.5rem",
  height: "3.5rem",
};

const variants = {
  on: {
    backgroundColor: [
      colorOn.background,
      colorOn.background,
      colorOn.background,
    ],
    color: [colorOn.font, colorOn.font, colorOn.font],
    scale: [1, 1.15, 1.1],
    fontSize: [colorOn.fontSize, colorOn.fontSize, colorOn.fontSize],
  },
  off: {
    backgroundColor: [
      colorOff.background,
      colorOff.background,
      colorOff.background,
    ],
    color: [colorOff.font, colorOff.font, colorOff.font],
    scale: [1.1, 0.95, 1],
    fontSize: [colorOff.fontSize, colorOff.fontSize, colorOff.fontSize],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_ON:
      return { isOn: !state.isOn };
    default:
      return state;
  }
};

const Box = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    isOn: false,
    bg: colorOff.background,
  });

  const toggleOn = () => {
    dispatch({ type: ACTIONS.TOGGLE_ON });
  };

  return (
    <motion.div
      className="Box"
      style={{
        backgroundColor: state.bg,
      }}
      initial="off"
      animate={state.isOn ? "on" : "off"}
      variants={variants}
      transition={{ ease: "easeInOut", duration: 0.2, times: [0, 0.2, 0.8] }}
      onClick={toggleOn}
    >
      {props.text}
    </motion.div>
  );
};

export default Box;
