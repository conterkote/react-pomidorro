import React from 'react';
import TimeCard from "./components/TimeCard";
import classes from './styles/TimeSelector.module.css'
import {TTimes} from "../../../types/utilTypes";


function TimeSelector() {
  const cardsTime: TTimes[] = ["morning", "midday", "afternoon", "evening"]
  const addTask = (time: TTimes) => {
    console.log(time)
  }
  const getReward = () => {

  }

  return (
    <div className={`TimeSelector ${classes.timeSelectorContainer}`}>
      {cardsTime.map(cardTime => <TimeCard time={cardTime} addTask={addTask}/>)}
      <button onClick={getReward} className={classes.rewardButton}>Get reward</button>
    </div>
  );
}

export default TimeSelector;