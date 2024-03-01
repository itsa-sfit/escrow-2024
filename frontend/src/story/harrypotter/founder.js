import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Founder = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
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
          setQuiz("diary");
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
      <h1 className="my-2">
        I am the first name of the headmaster who founded the house of the brave
        and Loyal. Where can you find me ?
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-2">Enter answer :</h1>
        <input
          type="text"
          className="w-full text-black"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        {error && <p className="text-red-500">Incorrect answer</p>}

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

export default Founder;
