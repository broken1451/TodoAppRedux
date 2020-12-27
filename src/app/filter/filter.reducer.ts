import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFilter } from './filter.actions';

export const initialState: filtrosValidos = 'todos';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, props) => props.filtro)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
