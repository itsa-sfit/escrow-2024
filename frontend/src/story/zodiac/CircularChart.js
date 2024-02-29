import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const CircularChart = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1 && q2 && q3 && q4) {
      const data = { answer: `${q1},${q2},${q3},${q4}` };
      try {
        const response = await fetch(serverUrl + "/question/3", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("alphabet grid");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2">
        Armed with the professor's Instagram profile, you have to decipher the
        celestial chart. Words from the crossword unveil a hidden narrative,
        revealing the Zodiac's secrets. With each puzzle piece falling into
        place, you edge closer to unmasking the elusive killer (hint four zodiac
        signs relevant to the previous answers)
      </h1>

      <form action="" className="text-left" onSubmit={handleSubmit}>
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

export default CircularChart;
