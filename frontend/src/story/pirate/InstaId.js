import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Player from "./Audio";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold">STORY</h1>
      <a
        className="block text-blue-400"
        target="_blank"
        rel="noreferrer"
        href="https://youtu.be/hTZXDZDGwtE?t=97"
      >
        Youtube link
      </a>
      <button
        onClick={() => setIntro(false)}
        type="submit"
        className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
      >
        Next
      </button>
    </div>
  );
};

const InstaId = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState("");
  const [intro, setIntro] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/1", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("instapost");
        } else {
          setError(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return intro ? (
    <Intro setIntro={setIntro} />
  ) : (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2 text-justify">
        Disturbed Parrot's voice tells about the map of treasure lies in a ocean
        and mention the id of instagram account
      </h1>
      <Player
        url={
          "https://res.cloudinary.com/dkqwol1ur/video/upload/v1709362733/escrow/clue_uaoqfx.mp3"
        }
      />

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Enter answer"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        {error && <h1 className="text-red-500">Incorrect answer</h1>}
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstaId;
