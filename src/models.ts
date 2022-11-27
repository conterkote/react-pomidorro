export interface IInitialState<T> {
  data : T[],
  status : 'idle' | 'pending' | 'succeeded' | 'failed',
  error : null | string;
}

export interface ITask {
  taskName : string,
  isCompleted : boolean,
  timeCategory : 'morning' | 'midday' | 'afternoon' | 'evening',
  timeOfCreation : Date,
}