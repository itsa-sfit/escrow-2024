import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold justify-center">STORY</h1>
      <h1 className="my-2 text-justify italic font-semibold">
        You play an old game you bought from a sale as you  start the game it magically teleports you to the mystical and magical world of wands and magical brooms which fly..
        The world of Harry Potter
        A player challenge has appeared
        If not accepted the player will die
        To save thyself, thou must unravel the riddles and uncover the forsaken treasure.
        Across the hall you see Professor McGonagall, step forward holding a weathered scroll in her hands.your heart races with fear and your heart starts throbbing . Unsure what is there inside the scroll with shaky hands , you retrieve the scroll hidden within the lion's paw and with no options left you unravel it. The scroll bears a riddle:
      </h1>
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

const Founder = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);
  const [intro, setIntro] = useState(true);

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

  return intro ? (
    <Intro setIntro={setIntro} />
  ) : (
    <div className="font-medium text-lg text-white text-justify">
      <h1 className="my-2 font-bold py-3">
        "I am the first name of the headmaster who founded the house of the brave
        and Loyal. Where can you find me ?"
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-2 text-base text-justify italic font-semibold">With fear and a uneasy feeling , you think over the riddle and type in your answer:
        </h1>
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="  Answer the Riddle Here !! "
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
