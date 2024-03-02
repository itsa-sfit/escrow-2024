import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "./../../components/Hint";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold">STORY</h1>
      <h1 className="my-2 text-justify">
        Finally, after many trials and tribulations, the adventurers reached the
        heart of the digital realm. There, they faced the toughest challenge
        yet: cracking the final code that guarded the treasure. It was a test of
        their skills and determination. But with teamwork and perseverance, they
        managed to decipher the code and unlock the treasure
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

const Program = ({ setQuiz }) => {
  const [intro, setIntro] = useState(true);
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
  return intro ? (
    <Intro setIntro={setIntro} />
  ) : (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2 text-justify">Challenge:</h1>
      <pre className="text-left">
        <code>
          {`number1 = 28368
number2 = 36348
number3 = 76134
number4 = 98247

result1 = (((number1 * 2) + 10) / 5) - 1000
result2 = ((((number2 * 2) + 123) - 987)  ^ 2
result3 = (3 * number3) + (789 / 3) - (25^2) % 7
result4 = ((((number4 * 2) + 6789) - 5432) / 3) % 7
# result is addition of all results
result=result1result2+result3+result4
a=int(res)
print("The output is:", b)
`}
        </code>
      </pre>
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
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Submit
        </button>
      </form>
      <Hint hintText={"Solve the error and decipher the python code."} />
    </div>
  );
};

export default Program;
