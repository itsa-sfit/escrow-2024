import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold justify-center">STORY</h1>
      <h1 className="my-2 text-justify italic font-semibold">
        With the third clue in hand, you make your way to the dungeons
        , your uncertainty of what happens next growing with each step.
        In a forgotten corner, you find an old vase hidden beneath a cloak
        , inside of which lies the next clue, written on a worn scrap of paper.
      </h1>
      <img
        src="img/HarryPotter/3.jpeg"
        alt=""
        className="w-full h-auto object-contain rounded-lg shadow-lg"
      />
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

const Spell = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);
  const [intro, setIntro] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/4", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("flower");
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
    <div className="font-medium text-lg  text-white text-justify">
      <h1 className="my-2 font-bold py-3">
        Within the grounds lies the spell known for conjuring a patronus, a
        powerful manifestation of positive energy used to repel dark forces.
        Which spell am I ?
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-sm rounded-lg mb-2 px-2 py-1"
          placeholder="Input only understand NATO phonetic alphabets"
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
      <Hint
        hintText={"NATO phonetic alphabets means if answer is ITSA , input will be India Tango Sierra Alpha"}
      />
    </div>
  );
};

export default Spell;
