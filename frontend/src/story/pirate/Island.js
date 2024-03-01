import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Island = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/5", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("prison");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg">
      <h1 className="my-2">
        After braving the tumultuous seas, the ship finally docked at a
        mysterious collection of islands. Consulting the map, next step wasn't
        straightforward. Instead, a cryptic riddle awaited, teasing the location
        of the coveted treasure
      </h1>
      <h1 className="my-2 font-bold">
        Riddle: Im a land of silence where life takes its last breath Surrounded
        by waves a solitary depth Isolated and still with secrets untold Deep in
        the darkness lies a grim reaper where visitors enter but none ever hold
      </h1>

      <form action="" className="text-left" onSubmit={handleSubmit}>
        <h1 className="mt-2">Enter answer :</h1>
        <input
          type="text"
          className="w-full"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Sumbit
        </button>
      </form>
      <Hint hintText={"translate answer to Spanish"} />
    </div>
  );
};

export default Island;
