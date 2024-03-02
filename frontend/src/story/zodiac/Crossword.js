import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold">STORY</h1>
      <h1 className="my-2 text-justify">
        In the bustling city of Constellara, a renowned astrologer, Professor
        Celestine, has been found murdered in his observatory. As the lead
        detective on the case, you delve into a web of cryptic clues left behind
        by the killer, who seems to have a penchant for the stars.
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

const Crossword = ({ setQuiz }) => {
  const [intro, setIntro] = useState(true);
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1 && q2 && q3 && q4) {
      const data = { answer: `${q1},${q2},${q3},${q4}` };
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
          setQuiz("instagram");
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
        In the dimly lit room, you found an old, dusty crossword puzzle
        scattered across a table. The squares contain cryptic clues that, when
        solved, unveil words related to the elusive Zodiac. As you piece
        together the crossword, hidden messages emerge, guiding you to the next
        challenge.
      </h1>
      <img
        src="img/crossword.png"
        alt=""
        className="w-full h-auto object-contain rounded-lg shadow-lg"
      />

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-2 text-center">1.capable of being changed</h1>
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
        <h1 className="mt-2">
          2.the third planet from the sun in our solar system
        </h1>
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Enter answer"
          name="2"
          value={q2}
          onChange={(e) => {
            setQ2(e.target.value);
          }}
        />
        <h1 className="mt-2">3.the universal solvent</h1>
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Enter answer"
          name="3"
          value={q3}
          onChange={(e) => {
            setQ3(e.target.value);
          }}
        />
        <h1 className="mt-2">4.set in place, not subject to change</h1>
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Enter answer"
          name="4"
          value={q4}
          onChange={(e) => {
            setQ4(e.target.value);
          }}
        />
        {error && <h1 className="text-red-500">Incorrect answer</h1>}
        <button
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Crossword;
