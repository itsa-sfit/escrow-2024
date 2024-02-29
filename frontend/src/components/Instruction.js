import React from "react";
import useUserContext from "../hooks/useUserContext";

const Instruction = () => {
  const { user } = useUserContext();
  const handleClick = async () => {
    const response = await fetch("http://127.0.0.1:8000" + "/start", {
      headers: {
        Authorization: "Bearer " + user.token,
        Accept: "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      const { message } = json;
    } else {
      
    }
  };

  return (
    <div className="Instruction">
      <h1 className="text-black mt-5 second-font">
        Hi! Welcome to Escrow, where you will dive into the virtual world of
        DeezNuts
      </h1>
      <div className="glass text-white w-full text-left second-font p-2 my-3">
        {/* <ImgTag
          src={"https://images5.alphacoders.com/104/thumb-1920-1046568.jpg"}
        /> */}
        <h1 className="text-center text-2xl">Instructions:</h1>
        <p>
          The maximum time alloted to complete the game is 7200s . After the
          time period, the session will expire.
        </p>
      </div>
      <button
        onClick={handleClick}
        className="glass px-3 py-1 escrow text-white text-2xl"
      >
        Start
      </button>
    </div>
  );
};

export default Instruction;
