import React from 'react'
import Crossword from "./Crossword";
import Instagram from "./Instagram";
import CircularChart from "./CircularChart";
import AlphabetGrid from "./AlphabetGrid";
import BinaryGrid from "./BinaryGrid";
import MissingGrid from "./MissingGrid";
import GuessRiddle from "./GuessRiddle";
import Killer from "./Killer";

const Zodiac = ({quiz, setQuiz}) => {
  return (
    <div>
      {quiz === "crossword" && <Crossword setQuiz={setQuiz} />}
        {quiz === "instagram" && <Instagram setQuiz={setQuiz} />}
        {quiz === "circular chart" && <CircularChart setQuiz={setQuiz} />}
        {quiz === "alphabet grid" && <AlphabetGrid setQuiz={setQuiz} />}
        {quiz === "binary grid" && <BinaryGrid setQuiz={setQuiz} />}
        {quiz === "missing grid" && <MissingGrid setQuiz={setQuiz} />}
        {quiz === "guess riddle" && <GuessRiddle setQuiz={setQuiz} />}
        {quiz === "killer" && <Killer setQuiz={setQuiz} />}
    </div>
  )
}

export default Zodiac