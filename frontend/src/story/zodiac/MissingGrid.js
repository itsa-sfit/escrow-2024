import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const MissingGrid = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1 && q2 && q3) {
      const data = { answer: `${q1},${q2},${q3}` };
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
          setQuiz("guess riddle");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2">
        As you progress deeper into the investigation, a mysterious table
        reveals itself, adorned with partial zodiac symbols. Some are missing,
        leaving gaps in the cosmic puzzle. Your task, Investigator, is to
        decipher the celestial clues and identify the absent zodiac symbols,
        completing the table that holds the key to unraveling the Zodiac
        Killer's secrets.
      </h1>
      <img
        src="img/missingGrid.png"
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
        <button
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Sumbit
        </button>
      </form>
      <Hint hintText="search for everything related to all the zodiac signs" />
    </div>
  );
};

export default MissingGrid;
