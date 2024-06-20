import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ number }) => {
  const [clicked, setClicked] = useState(false);

  let emoticons = [
    "😆",
    "😍",
    "🥳",
    "🐭",
    "🐹",
    "🍌",
    "🍑",
    "🎾",
    "🪁",
    "🚗",
    "🇰🇷",
    "🇬🇧",
    "🎉",
  ];

  let randomEmoticon = () => {
    return emoticons[Math.floor(Math.random() * emoticons.length)];
  };

  let rotation = () => {
    return Math.floor(Math.random() * 360);
  };

  let cardStyles = {
    transform: `rotate(${rotation()}deg)`,
  };
  return (
    <motion.div
      className="card"
      style={cardStyles}
      drag
      onClick={() => setClicked(!clicked)}
    >
      {clicked ? <h3>{randomEmoticon()}</h3> : <h1>{number}</h1>}
    </motion.div>
  );
};

export default Card;
