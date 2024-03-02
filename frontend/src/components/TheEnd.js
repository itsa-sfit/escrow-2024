import React from "react";

const TheEnd = () => {
  return (
    <div className="flex flex-col h-dvh w-full">
      <div className="flex grow h-dvh w-full items-center justify-center">
        <div className="glass text-white px-3 py-2 font-bold text-lg">
          <h1 className="tracking-widest text-4xl escrow mb-2">THE END</h1>
          <hr />
          <h1 className="mt-2">Es🐦‍⬛ has flown away...</h1>
          <h1>Try to catch it next time 😉</h1>
          <h1>Thank you for playing!!</h1>
          <br />
          <h1>Please give your feedback here 👇</h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfDIptHpA0zMG48dz9CioFHfq0DcvbZuiPHXJXkjcMQjkSbzQ/viewform?usp=sf_link"
            className="text-blue-300"
          >
            feedback form
          </a>
        </div>
      </div>
      <div className="grow-0 p-2 font-bold">
        <h1>Made by ITSA with 💖</h1>
        <div className="flex justify-between text-yellow-500">
          <span>
            <a href="https://vishalrmahajan.in">Vishal Mahajan</a>
          </span>
          <span>
            <a href="https://ajaykumarn3000.github.io/portfolio">
              Ajaykumar Nadar
            </a>
          </span>
          <span>
            <a href="https://github.com/KXN2004">Kevin Nadar</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TheEnd;
