import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Crossword = ({setQuiz}) => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1 && q2 && q3 && q4) {
      const data = { answer: `${q1},${q2},${q3},${q4}` }
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
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg">
      <h1 className="my-2">
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

      <form action="" className="text-left" onSubmit={handleSubmit}>
        <h1 className="mt-2">1.capable of being changed</h1>
        <input
          type="text"
          className="w-full"
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
          className="w-full"
          name="2"
          value={q2}
          onChange={(e) => {
            setQ2(e.target.value);
          }}
        />
        <h1 className="mt-2">3.the universal solvent</h1>
        <input
          type="text"
          className="w-full"
          name="3"
          value={q3}
          onChange={(e) => {
            setQ3(e.target.value);
          }}
        />
        <h1 className="mt-2">4.set in place, not subject to change</h1>
        <input
          type="text"
          className="w-full"
          name="4"
          value={q4}
          onChange={(e) => {
            setQ4(e.target.value);
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
    </div>
  );
};

export default Crossword;
