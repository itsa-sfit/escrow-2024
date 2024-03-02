import React from "react";
import InstaId from "./InstaId";
import InstaPost from "./InstaPost";
import Meme from "./Meme";
import Ghost from "./Ghost";
import Riddle from "./Riddle";
import ZodiacSign from "./ZodiacSign";
import Braille from "./Braille";
import Riddle2 from "./Riddle2";

const Pirate = ({ quiz, setQuiz }) => {
  return (
    <div>
      {quiz === "instaid" && <InstaId setQuiz={setQuiz} />}
      {quiz === "instapost" && <InstaPost setQuiz={setQuiz} />}
      {quiz === "meme" && <Meme setQuiz={setQuiz} />}
      {quiz === "ghostcolor" && <Ghost setQuiz={setQuiz} />}
      {quiz === "riddle" && <Riddle setQuiz={setQuiz} />}
      {quiz === "zodiac sign" && <ZodiacSign setQuiz={setQuiz} />}
      {quiz === "braille crossword" && <Braille setQuiz={setQuiz} />}
      {quiz === "riddle 2" && <Riddle2 setQuiz={setQuiz} />}
    </div>
  );
};

export default Pirate;
