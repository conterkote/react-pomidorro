import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask} from "../../../types/Tasks";
import {IInitialState} from "../../../types/TaskState";
import { RootState } from "../../../store/store";
import {v4} from 'uuid'


const initialState: IInitialState<ITask> = {
  data : [
    {
      id : v4(),
      taskName: 'Make a new component for News page',
      isCompleted: false,
      timeCategory: "morning",
      timeOfCreation: new Date('November 27, 2022 22:24:00')
    },
    {
      id : v4(),
      taskName: 'Make a new component for News page',
      isCompleted: true,
      timeCategory: "midday",
      timeOfCreation: new Date('November 27, 2022 22:25:00')
    },
    {
      id : v4(),
      taskName: 'Connect backend to frontend on Users page',
      isCompleted: false,
      timeCategory: "evening",
      timeOfCreation: new Date('November 27, 2022 23:26:00')
    },
  ],
  status : 'idle',
  error : null
}

const tasksSlice = createSlice({
  initialState,
  name : 'tasks',
  reducers : {
    addTask : {
      reducer(state, action: PayloadAction<ITask>) {
        state.data.push(action.payload)
      },
      prepare(payload : ITask) {
        return {
          id : v4(),
          payload
        }
      }
    }
  }
})

export const { addTask } = tasksSlice.actions;

export const selectAllTasks = (state : RootState) => state.tasks.data;

export default tasksSlice.reducer;