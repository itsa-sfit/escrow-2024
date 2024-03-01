import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Killer = ({ setQuiz }) => {
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
          setQuiz("success");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg text-white">
      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="my-2">
          Unlock the final enigma. The Zodiac Killer's true identity is
          concealed within the arrangement of letters. The culmination of your
          journey hinges on this final decryption. Trust the stars, and let the
          name emerge from the cosmic tapestry you've woven.
        </h1>
        <input
          type="text"
          className="w-full text-black"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />

        <button
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Sumbit
        </button>
      </form>
      <Hint
        hintText={
          "The previous answer holds the clue to the Zodiac Killer’s name"
        }
      />
    </div>
  );
};

export default Killer;
