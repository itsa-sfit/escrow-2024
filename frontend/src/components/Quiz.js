import React, { useState } from "react";
import Timer from "./Timer";
import useUserContext from "../hooks/useUserContext";
import { serverUrl } from "../setup";
import Crossword from "../story/zodiac/Crossword";
import Instagram from "../story/zodiac/Instagram";

const getQuestion = async (token, setQuiz) => {
  try {
    const response = await fetch(serverUrl + "/question", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setQuiz(json.Question);
  } catch (error) {
    console.log(error);
  }
};

const Quiz = () => {
  const { user } = useUserContext();
  const [quiz, setQuiz] = useState("");
  getQuestion(user.token, setQuiz);
  return (
    <div className="Quiz">
      <div className="glass p-2 mt-2">
        <div className="text-white text-2xl font-bold flex justify-around mb-2">
          <span>Quiz {quiz}/8</span>
          <Timer {...user.start_time} />
        </div>
        {quiz === "crossword" && <Crossword setQuiz={setQuiz}/>}
        {quiz === "instagram" && <Instagram />}
      </div>
    </div>
  );
};

export default Quiz;
