import React from "react";
import useUserContext from "../hooks/useUserContext";
import { serverUrl } from "../setup";

const Instruction = () => {
  const { user, dispatch } = useUserContext();
  const handleClick = async () => {
    const response = await fetch(serverUrl + "/time/start", {
      headers: {
        Authorization: "Bearer " + user.token,
        Accept: "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      const { message } = json;
      console.log(message);
    } else {
      console.log(json);
      dispatch({
        type: "LOGIN",
        payload: { token: user.token, start_time: json.start_time },
      });
    }
  };

  return (
    <div className="Instruction">
      <h1 className="text-black mt-5 second-font">
        Hi! Welcome to Escrow, where you will dive into the virtual world of
        Treasure Hunt
      </h1>
      <div className="glass text-white w-full text-left second-font p-2 my-3">
        {/* <ImgTag
          src={"https://images5.alphacoders.com/104/thumb-1920-1046568.jpg"}
        /> */}
        <h1 className="text-center text-2xl">Instructions:</h1>
        <p className="mb-2">
          1. The treasure hunt will commence at 1:00 PM sharp.
        </p>
        <p className="mb-2">
          2. Participants are permitted to use mobile phones and other sources
          to uncover answers to the clues.
        </p>
        <p className="mb-2">
          3. A penalty time of 30 seconds will be incurred for each clue hint
          used.
        </p>
        <p className="mb-2 font-bold text-lg">
          4. Once you proceed forward, there's no turning back. Please read the
          storyline and clues carefully, as answers to the clues may be hidden
          within it. You may also take screenshots of the same as per your wish.
        </p>
        <p className="mb-2">
          5. In case of any issues, kindly contact the following tech team
          support :-
        </p>
        <p className="mb-2">Ajaykumar Nadar : +91 93725 98749</p>
        <p className="mb-2">Vishal Mahajan : +91 89999 72216</p>
        <p className="mb-2">Kevin Nadar : +91 79775 37132</p>
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
