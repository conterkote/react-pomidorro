import {TStatuses} from "./utilTypes";

export interface IInitialState<T> {
  data : T[],
  status : TStatuses,
  error : null | string;
}