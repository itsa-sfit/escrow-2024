import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Diary = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
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
        } else {
          setError(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg text-white text-justify">
      <h1 className="mt-2  text-justify italic font-semibold">
        Only then does the scroll reveal the next Riddle, leading you
        deeper into the mysteries
        of Hogwarts and the quest for the hidden treasure.

      </h1>
      <h1 className="my-2 font-bold ">
        Riddle 2 : A serpent's whisper, a legacy entwined,
        In dungeons dark, my secrets I confide.
        From Slytherin's kin, my purpose was spun,
        What am I, guarding beneath the castle's run?
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="  Answer the Riddle Here !!"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        {error && <h1 className="text-red-500">Incorrect answer</h1>}

        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Diary;
