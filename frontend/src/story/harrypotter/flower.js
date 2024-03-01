import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Flower = ({ setQuiz }) => {
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
          setQuiz("gravity");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="font-medium text-lg">
      <h1 className="my-2">
        Find me, the name of the plant that screams when uprooted, lurking
        within the greenhouses. Where might you discover my presence? (convert
        to telephone digits) for eg. (A=2, B=22 , C=222, D=3 ,E=33 add spaces
        between alphabets)
      </h1>

      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
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
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Flower;
