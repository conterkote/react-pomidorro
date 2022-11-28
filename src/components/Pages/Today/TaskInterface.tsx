import React from 'react';
import Search from "./Search";
import PageHeader from "../../PageHeader";
import CompletedTasks from "./components/CompletedTasks";
import IncomingTasks from "./components/IncomingTasks";
import {useSelector} from "react-redux";
import {selectAllTasks} from "./tasksReducer";

function TaskInterface() {
  const tasks = useSelector(selectAllTasks);

  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  const incomingTasks = tasks.filter((task) => task.isCompleted === false);

  return (
    <div>
      <PageHeader text={'Today'}/>
      <Search />
      <CompletedTasks tasks={completedTasks} />
      <IncomingTasks tasks={incomingTasks}/>
    </div>
  );
}

export default TaskInterface;