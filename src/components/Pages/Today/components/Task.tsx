import React from 'react';
import {ITask} from "../../../../models";

function Task({ taskName, isCompleted, timeCategory, timeOfCreation } : ITask) {
  return (
    <div>
      {taskName}
    </div>
  );
}

export default Task;