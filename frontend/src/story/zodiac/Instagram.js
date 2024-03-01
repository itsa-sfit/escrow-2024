import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Instagram = ({ setQuiz }) => {
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
          setQuiz("circular chart");
        } else {
          setError(true);
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
        className="text-left flex items-center justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <h1 className="my-2">
          The professor's name conceals the digital path you seek. Look to the
          scholarly stars, where wisdom meets temporality, to unravel the
          ciphered username on Instagram. In the leap, find the key to open the
          next door in our cosmic quest.
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

          {error && <h1 className="text-red-500">Incorrect answer</h1>}
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Submit
        </button>
      </form>
      <Hint hintText="The professor's name is the key to the next door." />
    </div>
  );
};

export default Instagram;
