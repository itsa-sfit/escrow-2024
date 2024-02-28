import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div
        style={{ "background-image": `url("bg.jpg")` }}
        className="w-full h-full object-cover"
      >
      <div className="z-[100] bg-[rgba(0,0,0,0.3)]">
        <h1 className="font-xl text-white">Hello</h1>
      </div>
      </div>
    </div>
  );
};

export default Home;
