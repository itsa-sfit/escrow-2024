import React from "react";
import Security from "./Security";
import Pattern from "./Pattern";
import Time from "./Time";
import Ascii from "./Ascii";
import LogicaGate from "./LogicGate";
import CeaserCypher from "./CeaserCypher";
import Program from "./Program";
import Insta from "./Insta";

const Digital = ({ quiz, setQuiz }) => {
  return (
    <div>
      {quiz === "security" && <Security setQuiz={setQuiz} />}
      {quiz === "pattern" && <Pattern setQuiz={setQuiz} />}
      {quiz === "time" && <Time setQuiz={setQuiz} />}
      {quiz === "ascii" && <Ascii setQuiz={setQuiz} />}
      {quiz === "logic gate" && <LogicaGate setQuiz={setQuiz} />}
      {quiz === "ceaser cypher" && <CeaserCypher setQuiz={setQuiz} />}
      {quiz === "program" && <Program setQuiz={setQuiz} />}
      {quiz === "insta" && <Insta setQuiz={setQuiz} />}
    </div>
  );
};

export default Digital;
