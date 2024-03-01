import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";
import Hint from "../../components/Hint";

const Coding2 = ({ setQuiz }) => {
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
       <pre>
       Finally, after many trials and tribulations, the adventurers reached the heart of the digital realm. There, they faced the toughest challenge yet: cracking the final code that guarded the treasure. It was a test of their skills and determination. But with teamwork and perseverance, they managed to decipher the code and unlock the treasure.
    Challenge:
    number1 = 28368
     number2 = 36348
     number3 = 76134
     number4 = 98247

    result1 = (((number1 * 2) + 10) / 5) - 1000
    result2 = ((((number2 * 2) + 123) - 987)  ^ 2)
    result3 = (3 * number3) + (789 / 3) - (25^2) % 7
    result4 = ((((number4 * 2) + 6789) - 5432) / 3) % 7

    result=result1+result2+result3+result4
    a=int(result)
    print("The output is:", a)

       </pre>
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
          type="sumbit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Sumbit
        </button>
      </form>
      <Hint hintText={"initials of each reveals the answer"} />
    </div>
  );
};

export default Coding2;
