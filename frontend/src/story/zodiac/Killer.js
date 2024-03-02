import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Killer = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

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
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="my-2 text-justify ">
          You stand at the precipice of revelation, poised to guess who spoke
          these chilling words. your choices hold the key to unveiling the
          identity of the Zodiac Killer, bringing an end to their cryptic reign.
          Trust your instincts and plunge into the final chapter of this cosmic
          quest.
        </h1>
        <h1 className="mb-2 text-justify">
          A series of cryptic quotes, like haunting echoes from the past,
          confront you with the enigma of the killer's identity.
        </h1>
        <em>“When I was a little kid I was just like anybody else.”</em>
        <em>“I don't care if I live or die. Go ahead and kill me.”</em>
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
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Submit
        </button>
      </form>
      <div className="Hint flex justify-center">
        <h1>Hint of digital world lies on the insta id Escrowtechtrail</h1>
      </div>
    </div>
  );
};

export default Killer;
