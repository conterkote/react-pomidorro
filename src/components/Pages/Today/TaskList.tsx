import React from 'react';
import Task from "./components/Task";
import {ITask} from "../../../types/Tasks";
import classes from './styles/TaskList.module.css';

export type taskListDisplayState = 'block' | 'none'

interface ITaskListProps {
  displayState : taskListDisplayState,
  tasks : Array<ITask>
}

function TaskList({ displayState, tasks } : ITaskListProps) {
  const displayStateCSS = {display : displayState};
  console.log(displayStateCSS);
  const renderedTasks = tasks.map((task) => <Task key={task.id}
                                                  id={task.id}
                                                  taskName={task.taskName}
                                                  isCompleted={task.isCompleted}
                                                  timeCategory={task.timeCategory}
                                                  timeOfCreation={task.timeOfCreation} />);
  return (
    <div style={displayStateCSS} className={classes.TaskList}>
      {renderedTasks}
    </div>
  );
}

export default TaskList;