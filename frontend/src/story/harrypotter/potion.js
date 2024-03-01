import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Potion = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
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
          setQuiz("spell");
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
        The potion that allows you to take the form of someone else. Enter
        Answer in numbers corresponding to alphabets
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
        {error && <h1 className="text-red-500">Incorrect answer</h1>}
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%]"
        >
          Submit
        </button>
      </form>
      <Hint hintText="CAR= 3 1 18, so answer 3 1 18" />
    </div>
  );
};

export default Potion;
