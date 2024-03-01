import React, { useState } from "react";
import { serverUrl } from "../../setup";
import useUserContext from "../../hooks/useUserContext";

const Coding = ({ setQuiz }) => {
  const [q1, setQ1] = useState("");
  const { user } = useUserContext();

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
          setQuiz("prison");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="font-medium text-lg">
      <h1 className="my-2">
        As the wall breaks the challengers go through, a new challenge awaits
        for them in a form of a code that repeats a certain sequence The
        adventurers had to be clever to navigate through the sequence. They
        followed syntax, trying to crack the code that would lead them to the
        treasure.
      </h1>

      <pre>
        <code>
          {`Challenge:
def print_letter_1(size):
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

      <form action="" className="text-left" onSubmit={handleSubmit}>
        <h1 className="mt-2">Enter answer :</h1>
        <input
          type="text"
          className="w-full"
          name="1"
          value={q1}
          onChange={(e) => {
            setQ1(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          className="border-2 border-white p-2 m-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Coding;
