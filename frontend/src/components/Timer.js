import React, { useState, useEffect, useMemo } from 'react';

const Timer = ({ hours, minutes, seconds }) => {
  const targetTime = useMemo(() => {
    const time = new Date();
    time.setHours(parseInt(hours));
    time.setMinutes(parseInt(minutes));
    time.setSeconds(parseInt(seconds));
    return time;
  }, [hours, minutes, seconds]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState(currentTime.getTime() - targetTime.getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeElapsed(currentTime.getTime() - targetTime.getTime());
  }, [currentTime, targetTime, setTimeElapsed]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const hoursElapsed = Math.floor(timeElapsed / (1000 * 60 * 60));
  const minutesElapsed = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  const secondsElapsed = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  return (
    <div>
      <p> {formatTime(hoursElapsed)}:{formatTime(minutesElapsed)}:{formatTime(secondsElapsed)}</p>
    </div>
  );
};

export default Timer;
