import React from "react";

const BG = () => {
  return (
    <div
      className="BG z-[-100] bg-white fixed top-0 left-0 text-white flex flex-col items-center justify-center min-h-dvh w-full object-cover"
    >
      <img
        src="escrow.png"
        className="w-full mix-blend-luminosity opacity-50"
        alt=""
      />
      {/* <h1 className="text-4xl text-black font-semibold opacity-50">ITSA x Escrow</h1>
      <h1 className="text-5xl text-black font mb-5 opacity-50">2024</h1> */}
    </div>
  );
};

export default BG;
