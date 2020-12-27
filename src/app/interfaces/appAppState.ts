import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from '../filter/filter.actions';
import { filterReducer } from '../filter/filter.reducer';
import { Todo } from '../todos/models/todo.model';
import { todoReducer } from '../todos/todo.reducer';
// esto es para el store
export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

// poner varios reducer
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer,
};
