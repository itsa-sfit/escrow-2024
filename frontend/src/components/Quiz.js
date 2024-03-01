import React, { useState } from "react";
import Timer from "./Timer";
import useUserContext from "../hooks/useUserContext";
import { serverUrl } from "../setup";
import Zodiac from "../story/zodiac/Zodiac";
import HarryPotter from "../story/harrypotter/harrypotter";
import Success from "./Success";

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
    <div className="Quiz grow flex items-center">
      <div className="glass p-2 mt-2">
        <div className="text-white text-2xl font-bold flex justify-around mb-2">
          <span>Quiz {quiz}</span>
          <Timer {...user.start_time} />
        </div>
        <HarryPotter quiz={quiz} setQuiz={setQuiz} />
        <Zodiac quiz={quiz} setQuiz={setQuiz} />
        {quiz === "success" && (
        <Success />
      )}
      </div>
    </div>
  );
};

export default Quiz;
