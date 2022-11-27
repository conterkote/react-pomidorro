export interface IInitialState<T> {
  data : T[],
  status : 'idle' | 'pending' | 'succeeded' | 'failed',
  error : null | string;
}