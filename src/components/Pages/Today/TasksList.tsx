import React from 'react';
import Task from "./components/Task";

function TasksList() {
  return (
    <div>
      <Task taskDateOfTime={'Morning'} taskHeader={'Hello world'} />
    </div>
  );
}

export default TasksList;