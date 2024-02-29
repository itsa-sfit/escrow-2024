import React, { useState } from "react";

import ImgTag from "./ImgTag";
import BG from "./BG";
import Instruction from "./Instruction";
import Quiz from "./Quiz";

const Home = () => {
  return (
    <div className="Home h-dvh">
      <span className="escrow text-black text-4xl">ESCROW 2024</span>
      {/* <Instruction /> */}
      <Quiz />
    </div>
  );
};

export default Home;
