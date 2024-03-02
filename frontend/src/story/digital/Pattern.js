import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold">STORY</h1>
      <h1 className="my-2 text-justify">
        As the wall breaks the challengers go through, a new challenge awaits
        for them in a form of a code that repeats a certain sequence The
        adventurers had to be clever to navigate through the sequence. They
        followed syntax, trying to crack the code that would lead them to the
        treasure.
      </h1>
      <button
        onClick={() => setIntro(false)}
        type="submit"
        className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
      >
        Next
      </button>
    </div>
  );
};

const Pattern = ({ setQuiz }) => {
  const [intro, setIntro] = useState(true);
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (q1) {
      const data = { answer: `${q1}` };
      try {
        const response = await fetch(serverUrl + "/question/2", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        if (json.Correct) {
          setQuiz("time");
        } else {
          setError(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return intro ? (
    <Intro setIntro={setIntro} />
  ) : (
    <div className="font-medium text-lg text-white">
      <h1 className="my-2 text-justify">Challenge:</h1>
      <pre className="text-left">
        <code>
          {`def print_letter_1(size):
  for i in range(size):
    if i == 0 or i == size // 2 or i == size - 1:
      print('[*]' * size)
    elif i < size // 2:
      print('[*]')
    else:
      print('[*]')

def print_letter_2(size):
  for i in range(size):
    if i == 0:
      print('[*]' * size)
    else:
      print('   ' * (size // 2) + '[*]')

def print_letter_3(size):
  for i in range(size):
    if i == 0:
      print('[*]' * size)
    else:
      print('   ' * (size // 2) + '[*]')

def print_letter_in_star_pattern(size): 
  print_letter_1(size)
  print()
  print_letter_2(size)
  print()
  print_letter_3(size)

size = 5 
print_letter_in_star_pattern(size)`}
        </code>
      </pre>
      <form
        action=""
        className="text-left flex flex-col justify-start items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full text-black/70 mt-2 placeholder:text-base rounded-lg mb-2 px-2 py-1"
          placeholder="Enter answer"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        {error && <h1 className="text-red-500">Incorrect answer</h1>}
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Pattern;
