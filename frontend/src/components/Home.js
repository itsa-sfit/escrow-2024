import React from "react";

import Instruction from "./Instruction";
import Quiz from "./Quiz";
import useUserContext from "../hooks/useUserContext";
import Logout from "./Logout";

const Home = () => {
  const { user } = useUserContext();
  return (
    <div className="Home h-dvh">
      <div className="flex justify-around">
        <span className="escrow text-black text-4xl">ESCROW 2024</span>
        <Logout />
      </div>
      {user.start_time ? <Quiz /> : <Instruction />}
      {/* <Instruction /> */}
      {/* <Quiz /> */}
    </div>
  );
};

export default Home;
