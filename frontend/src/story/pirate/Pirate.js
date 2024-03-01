import React from 'react'

import Instagram from "./Instagram";

import Killer from "./Killer";
import Audio from './Audio';
import Photo from './Photo';
import Ghost from './Ghost';
import Island from './Island';
import Cave from './Cave';
import Mantra from './Mantra';
import Treasure from './Treasure';

const Pirate = ({quiz, setQuiz}) => {
  return (
    <div>
      {quiz === "audio" && <Audio setQuiz={setQuiz} />}
        {quiz === "instagram" && <Instagram setQuiz={setQuiz} />}
        {quiz === "photo" && <Photo setQuiz={setQuiz} />}
        {quiz === "ghost" && <Ghost setQuiz={setQuiz} />}
        {quiz === "island" && <Island setQuiz={setQuiz} />}
        {quiz === "cave" && <Cave setQuiz={setQuiz} />}
        {quiz === "mantra" && <Mantra setQuiz={setQuiz} />}
        {quiz === "treasure" && <Treasure setQuiz={setQuiz} />}
        {quiz === "success" && <h1>Success</h1>}
    </div>
  )
}

export default Pirate