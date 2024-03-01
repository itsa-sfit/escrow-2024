import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const AlphabetGrid = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const { user } = useUserContext();
  const { error, setError } = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1 && q2 && q3 && q4 && q5 && q6) {
      const data = { answer: `${q1},${q2},${q3},${q4},${q5},${q6}` };
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
          setQuiz("binary grid");
        }  else {
          setError(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2">
        A mysterious alphabet grid awaits you, filled with seemingly random
        letters. Little do you know, these letters conceal the secrets of the
        zodiac signs. By carefully selecting and rearranging the appropriate
        alphabets, unlock the celestial symbols that hold crucial information in
        the pursuit of the elusive Zodiac Killer.
      </h1>
      <img
        src="img/alphabetGrid.png"
        alt=""
        className="w-full h-auto object-contain rounded-lg shadow-lg"
      />

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black my-2"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full text-black my-2"
          name="2"
          value={q2}
          onChange={(e) => {
            setQ2(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full text-black my-2"
          name="3"
          value={q3}
          onChange={(e) => {
            setQ3(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full text-black my-2"
          name="4"
          value={q4}
          onChange={(e) => {
            setQ4(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full text-black my-2"
          name="3"
          value={q5}
          onChange={(e) => {
            setQ5(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full text-black my-2"
          name="4"
          value={q6}
          onChange={(e) => {
            setQ6(e.target.value);
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

export default AlphabetGrid;
