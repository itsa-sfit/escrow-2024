import React, { useState } from "react";

import Instruction from "./Instruction";
import Quiz from "./Quiz";
import useUserContext from "../hooks/useUserContext";

const Home = () => {
  const { user } = useUserContext();
  return (
    <div className="Home h-dvh">
      <span className="escrow text-black text-4xl">ESCROW 2024</span>
      {user.start_time ? <Quiz /> : <Instruction />}
      {/* <Instruction /> */}
      {/* <Quiz /> */}
    </div>
  );
};

export default Home;
