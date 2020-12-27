import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{ id: number; texto: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const toggleAllTodo = createAction(
  '[TODO] ToggleAllTodo todo',
  props<{ completado: boolean }>()
);

export const clearTodos = createAction(
  '[TODO] ClearTodos todo'
);