import Founder from "./founder";
import Diary from "./diary";
import Potion from "./potion";
import Spell from "./spell";
import Flower from "./flower";
import Gravity from "./gravity";
import Animal from "./animal";
import Prison from "./prison";

const HarryPotter = ({ quiz, setQuiz }) => {
  return (
    <div>
      {quiz === "founder" && <Founder setQuiz={setQuiz} />}
      {quiz === "diary" && <Diary setQuiz={setQuiz} />}
      {quiz === "potion" && <Potion setQuiz={setQuiz} />}
      {quiz === "spell" && <Spell setQuiz={setQuiz} />}
      {quiz === "flower" && <Flower setQuiz={setQuiz} />}
      {quiz === "gravity" && <Gravity setQuiz={setQuiz} />}
      {quiz === "animal" && <Animal setQuiz={setQuiz} />}
      {quiz === "prison" && <Prison setQuiz={setQuiz} />}
      
    </div>
  );
};

export default HarryPotter;
