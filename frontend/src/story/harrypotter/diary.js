import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Diary = ({setQuiz}) => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1 && q2) {
      const data = { answer: `${q1},${q2}` }
      try {
        const response = await fetch(serverUrl + "/question/2", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("potion");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg">
    
      <h1 className="my-2">
        RIDDLE 1 : Within shadows deep, a soul's deceit does dwell,
        Bound in ink and pages, its secrets it does tell.
        A mirror of its master's darkest lore,
        What am I, hidden beneath the Chamber's floor?
      </h1>
      <h1 className="my-2">
        RIDDLE 2 : A serpent's whisper, a legacy entwined,
        In dungeons dark, my secrets I confide.
        From Slytherin's kin, my purpose was spun,
        What am I, guarding beneath the castle's run?
      </h1>
      
      <form action="" className="text-left" onSubmit={handleSubmit}>
        <h1 className="mt-2">Enter answer of RIDDLE 1 :</h1>
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
          Enter answer of RIDDLE 2 :
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

export default Diary;
