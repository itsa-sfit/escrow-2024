import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold justify-center">STORY</h1>
      <h1 className="my-2 text-justify italic font-semibold">
        Armed with the knowledge of Polyjuice Potion, you finally get a hold over yourself and make your way to the Hogwarts grounds, where you explore the vast expanse of magical creatures and enchanting landscapes. After a long and a thorough search, you stumble upon a forgotten tome containing the incantation for casting the Patronus Charm, tucked within the roots of the Whomping Willow.
      </h1>
      <img
        src="img/HarryPotter/5.jpeg"
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

const Flower = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const [error, setError] = useState(false);
  const { user } = useUserContext();
  const [intro, setIntro] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/5", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("gravity");
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
        Find me, the name of the plant that screams when uprooted, lurking
        within the greenhouses. Where might you discover my presence?
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-sm rounded-lg mb-2 px-2 py-1"
          placeholder="This Input only understand telephonic Digit"
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
      <Hint
        hintText={"Telephonic Digits means A=2, B=22 , C=222, D=3 ,E=33,W=9, X=99"}
      />
    </div>
  );
};

export default Flower;
