import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold justify-center">STORY</h1>
      <h1 className="my-2 text-justify italic font-semibold">
        Next,you venture to the Quidditch pitch, where when you search among the stands and the sky for clues. After some time, you discover a weathered plaque with the incantation "Wingardium Leviosa" etched into it, hidden amidst the bleachers.Beside the plaque, kept under a perfectly round rock was another clue.
      </h1>
      <img
        src="img/HarryPotter/6.jpeg"
        alt=""
        className="w-full h-auto object-contain rounded-lg shadow-lg"
      />

      <button
        onClick={() => setIntro(false)}
        type="submit"
        className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
      >
        Next
      </button>
    </div>
  );
};

const Animal = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);
  const [intro, setIntro] = useState(true);

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
  return intro ? (
    <Intro setIntro={setIntro} />
  ) : (
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
