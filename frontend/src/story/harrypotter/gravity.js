import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold justify-center">STORY</h1>
      <h1 className="my-2 text-justify italic font-semibold">
        With the fifth clue deciphered, you head to the greenhouses, where you encounter a variety of magical plants and herbs. Among them, you find the Mandrake, a plant known for its distinctive cry when uprooted from its pot. Hidden beneath the leaves, they discover a small piece of paper with the next clue
      </h1>
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


const Gravity = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);
  const [intro, setIntro] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/6", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("animal");
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
    <div className="font-medium text-lg text-white text-justify">
      <h1 className="my-2 font-bold py-3">
        The spell that makes things soar, like never before, is the one you'll
        adore. With a swish and flick of the wand, objects float, as if carried
        by a magical boat. The answer to this clue is the name of this magical
        spell
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Cast your spell here"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        <br />
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

export default Gravity;
