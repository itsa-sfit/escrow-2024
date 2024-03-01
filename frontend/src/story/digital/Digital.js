import React from 'react'

import Instagram from "./Instagram";


import Treasure from './Treasure';
import Adventure from './Adventure';
import Coding from './Coding';
import Steganography from './Steganography';
import Ascii from './Ascii';
import Cipher from './Cipher';
import Coding2 from './Coding2';

const Digital = ({quiz, setQuiz}) => {
  return (
    <div>
      {quiz === "adventure" && <Adventure setQuiz={setQuiz} />}
        {quiz === "coding" && <Coding setQuiz={setQuiz} />}
        {quiz === "stegano" && <Steganography setQuiz={setQuiz} />}
        {quiz === "ascii" && <Ghost setQuiz={setQuiz} />}
        {quiz === "logical" && <Ascii setQuiz={setQuiz} />}
        {quiz === "cipher" && <Cipher setQuiz={setQuiz} />}
        {quiz === "codingg2" && <Coding2 setQuiz={setQuiz} />}
        {quiz === "last" && <Treasure setQuiz={setQuiz} />}
        {quiz === "success" && <h1>Success</h1>}
    </div>
  )
}

export default Digital