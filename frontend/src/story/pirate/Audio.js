import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Audio = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState("");

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
    <div className="font-medium text-lg text-white">
      <h1 className="my-2 text-justify">
        Disturbed Parrot’s voice tells about the map of treasure lies in a ocean
        and mention the id of ocean account
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Enter answer"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
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

export default Audio;
