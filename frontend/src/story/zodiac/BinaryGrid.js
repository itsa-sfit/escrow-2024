import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const BinaryGrid = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();

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
          setQuiz("missing grid");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2">
        As you continue through the celestial trail, a coded puzzle, composed of
        binary numbers, presents itself. Delve into decoding the binary
        sequence, meticulously deciphering 0s and 1s to reveal a single, cryptic
        number. This number, once unveiled, holds the key to advancing further
        in the quest to unmask the Zodiac Killer. (one single number indicating
        the number of letters in sign)
      </h1>

      <img
        src="img/binaryGrid.png"
        alt=""
        className="w-full h-auto object-contain mb-2 rounded-lg shadow-lg"
      />
      <form action="" className="text-left" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full text-black"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />

        <button
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default BinaryGrid;
