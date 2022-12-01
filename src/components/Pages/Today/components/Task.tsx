import React from 'react';
import {ITask} from "../../../../types/Tasks";

function Task({ taskName, isCompleted, timeCategory, timeOfCreation } : ITask) {
  return (
    <div>
      {taskName}
    </div>
  );
}

export default Task;