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
          <span>Quiz {quiz}</span>
          <Timer {...user.start_time} />
        </div>
        {quiz === "crossword" && <Crossword setQuiz={setQuiz}/>}
        {quiz === "instagram" && <Instagram setQuiz={setQuiz}/>}
        {quiz === "founder" && <Founder setQuiz={setQuiz} />}
        {quiz === "diary" && <Diary setQuiz={setQuiz}/>}
        {quiz === "potion" && <Potion setQuiz={setQuiz}/>}
        {quiz === "spell" && <Spell setQuiz={setQuiz}/>}
        {quiz === "flower" && <Flower setQuiz={setQuiz}/>}
        {quiz === "gravity" && <Gravity setQuiz={setQuiz}/>}
        {quiz === "animal" && <Animal setQuiz={setQuiz}/>}
        {quiz=== "prison" && <Prison setQuiz={setQuiz}/>}
        {quiz === "success" && <h1 className="text-white text-2xl font-bold">Congratulations! You have completed the quiz</h1>}
      </div>
    </div>
  );
};

export default Quiz;
