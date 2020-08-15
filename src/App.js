import React, { useEffect, useState } from 'react';
import Hand from './components/Hand';
import Num from './components/Num';
import useInterval from './hooks/useInterval';
import './App.css';

function App() {
  const [hourHand, setHourHand] = useState(null);
  const [minuteHand, setMinuteHand] = useState(null);
  const [secondHand, setSecondHand] = useState(null);
  const setTime = () => {
    const nowDate = new Date();
    const secondsRatio = nowDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + nowDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + nowDate.getHours()) / 12;
    setSecondHand(secondsRatio * 360);
    setMinuteHand(minutesRatio * 360);
    setHourHand(hoursRatio * 360);
  };
  useInterval(() => {
    setTime();
  }, 1000);

  useEffect(() => {
    setTime();
  }, []);
  return (
    <div className="clock">
      <Hand classN="hand hour" ratio={hourHand} />
      <Hand classN="hand minute" ratio={minuteHand} />
      <Hand classN="hand second" ratio={secondHand} />
      {[...Array(12).keys()].map((e, i) => (
        <Num key={i} num={i + 1} classN={`num num__${i + 1}`} />
      ))}
    </div>
  );
}

export default App;
