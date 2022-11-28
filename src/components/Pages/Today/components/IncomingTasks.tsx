import React, {CSSProperties} from 'react';
import SectionHeader from "../../../SectionHeader";
import classes from './styles/IncomingTasks.module.css'
import TaskList from "../TaskList";
import {IStatedTasks, ITask} from "../../../../models";

function IncomingTasks({ tasks } : IStatedTasks) {
  const style = {marginBottom: '18px'} as CSSProperties;

  return (
    <div>
        <SectionHeader style={style} text={`Incoming Tasks`}/>
        <TaskList displayState={"block"} tasks={tasks} />
    </div>
  );
}

export default IncomingTasks;