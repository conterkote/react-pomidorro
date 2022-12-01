import {TTimes} from './utilTypes'

export interface ITask {
  id : string,
  taskName : string,
  isCompleted : boolean,
  timeCategory : TTimes,
  timeOfCreation : Date,
}

export interface IStatedTasks {
  tasks : Array<ITask>
}
