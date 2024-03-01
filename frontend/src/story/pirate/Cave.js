import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Cave = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
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
          setQuiz("prison");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg">
      <h1 className="my-2">
        At the island of the uninhabited or so they say "the island of the
        dead", you face with the natives and a language barrier...All they can
        help you is with 4 images which Goldy Rogers left before leaving the
        spooky island.
      </h1>

      <form action="" className="text-left" onSubmit={handleSubmit}>
        <h1 className="mt-2">Enter answer :</h1>
        <input
          type="text"
          className="w-full"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <Hint hintText={"initials of each reveals the answer"} />
    </div>
  );
};

export default Cave;
