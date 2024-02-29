import React, { useState, useEffect } from 'react';

const Timer = ({ hours, minutes, seconds }) => {
  // Convert props to numbers
  const targetTime = new Date();
  targetTime.setHours(parseInt(hours));
  targetTime.setMinutes(parseInt(minutes));
  targetTime.setSeconds(parseInt(seconds));

  const [timeLeft, setTimeLeft] = useState(targetTime.getTime() - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 0) {
          clearInterval(timer);
          // Handle timer completion here
          console.log("Timer completed!");
          return 0;
        } else {
          return prevTimeLeft - 1000;
        }
      });
    }, 1000);

    // Calculate initial time difference after setting up the interval
    setTimeLeft(targetTime.getTime() - new Date().getTime());

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <p>Time Left: {formatTime(hoursLeft)}:{formatTime(minutesLeft)}:{formatTime(secondsLeft)}</p>
    </div>
  );
};

export default Timer;
