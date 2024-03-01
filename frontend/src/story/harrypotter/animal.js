import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Animal = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/7", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("prison");
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
      <h1 className="my-2 font-bold py-3">
        "In the depths of the forest, among the shadows cast by ancient trees,
        dwells the nameless creature, visible only to those who have gazed upon
        death's embrace. Where might you find me?"
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-sm rounded-lg mb-2 px-2 py-1"
          placeholder="This Input only understand Shift-5 Caesar cypher"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        <br />
        {error && <h1 className="text-red-500">Incorrect answer</h1>}
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Animal;
