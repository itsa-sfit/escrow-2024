import React, { useState } from "react";

import ImgTag from "./ImgTag";
import BG from "./BG";
const Home = () => {
  return (
    <div className="Home h-dvh">
      <span className="escrow text-black text-4xl">ESCROW 2024</span>
      <h1 className="text-black mt-5 second-font">
        Hi! Welcome to Escrow, where you will dive into the virtual world of
      </h1>
      <div className="glass text-white w-full text-left">
        {/* <ImgTag
          src={"https://images5.alphacoders.com/104/thumb-1920-1046568.jpg"}
        /> */}
        <h1 className="text-center">Instructions:</h1>
        <p>
          The maximum time alloted to complete the game is 7200s . After the
          time period, the session will expire.
        </p>
      </div>
    </div>
  );
};

export default Home;
