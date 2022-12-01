import React, {CSSProperties, useState} from 'react';
import SectionHeader from "../../../SectionHeader";
import classes from './styles/CompletedTasks.module.css'
import TaskList, {taskListDisplayState} from "../TaskList";
import {IStatedTasks} from "../../../../types/Tasks";


function CompletedTasks({ tasks } : IStatedTasks) {
  const [displayState, setDisplayState] = useState<taskListDisplayState>('none');
  const buttonContent = displayState === 'block' ? 'Hide completed tasks' : 'Show completed tasks'
  const buttonCSS = displayState === 'block' ?
    {backgroundColor : '#F59494', color: '#8F2C2C'} :
    {backgroundColor : '#94F5C5', color: '#1C794B'};
  const switchDisplayState = () => {
    setDisplayState(prevState => {
      switch (prevState) {
        case "block":
          return 'none'
        case "none":
          return 'block'
      }
    })
  }

  return (
    <div className={classes.CompletedTasks}>
      <div className={classes.stateControlWrapper}>
        <SectionHeader text={`Completed Tasks`}/>
        <button style={buttonCSS}
                className={classes.switchDisplayStateButton}
                onClick={switchDisplayState}>
          {buttonContent}
        </button>
      </div>
      <TaskList tasks={tasks} displayState={displayState} />
    </div>
  );
}

export default CompletedTasks;