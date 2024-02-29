import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const GuessRiddle = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/7", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("killer");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg text-white">
      <form action="" className="text-left" onSubmit={handleSubmit}>
        <h1 className="my-2">
          The enigma doesn't stop there. A riddle, shrouded in mystery, demands
          your attention. Like a cryptic whisper from the shadows, the riddle
          challenges your intellect. Every correct answer brings you closer to
          the heart of the Zodiac's elusive truth. (hint:Name of a zodiac sign)
        </h1>
        <input
          type="text"
          className="w-full text-black"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />

        <button
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default GuessRiddle;
