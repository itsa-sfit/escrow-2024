import React, { useState, useEffect } from "react";

const Timer = ({ hours, minutes, seconds }) => {
  // Convert props to numbers
  const targetTime = new Date();
  targetTime.setHours(parseInt(hours));
  targetTime.setMinutes(parseInt(minutes));
  targetTime.setSeconds(parseInt(seconds));

  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState(
    currentTime.getTime() - targetTime.getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeElapsed(currentTime.getTime() - targetTime.getTime());
  }, [currentTime]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const hoursElapsed = Math.floor(timeElapsed / (1000 * 60 * 60));
  const minutesElapsed = Math.floor(
    (timeElapsed % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsElapsed = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  return (
    <span>
      {formatTime(hoursElapsed)}:{formatTime(minutesElapsed)}:
      {formatTime(secondsElapsed)}
    </span>
  );
};

export default Timer;
