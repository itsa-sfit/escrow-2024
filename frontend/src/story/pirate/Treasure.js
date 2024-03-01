import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Treasure = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/8", {
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
        At last, I stood before the treasure, but no key adorned its ancient
        lock. Instead, a riddle, etched in the chest's weathered wood,
        challenged my wit. Each engraved line hinted at a puzzle, a cryptic code
        to unravel the secret of its contents. The race against time and mind
        had begun
      </h1>
      <h1 className="my-2">
        Riddle: Your journey throughout the voyage has been commendable. Your
        wits and reselience to the very end is second to none....But you failed
        to notice one thing:
        <b className="text-bold">
          "you began this journey with me and you will end it with me{" "}
        </b>
        , follow the path where <b className="text-bold">shadows </b>whisper
        secrets, where the silent sentinel of{" "}
        <b className="text-bold">ebony feathers</b> guards the key to untold
        riches
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
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Treasure;
