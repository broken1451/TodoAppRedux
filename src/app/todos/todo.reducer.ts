import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('obtener las gemas'),
  new Todo('salvar la mundo de thanos'),
  new Todo('Vencer a thor'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crearTodo, (state, props) => [...state, new Todo(props.texto)]),
  on(actions.toggle, (state, props) => {
    return state.map((todo) => {
      if (todo.id === props.id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editTodo, (state, props) => {
    return state.map((todo) => {
      if (todo.id === props.id) {
        return {
          ...todo,
          texto: props.texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.deleteTodo, (state, props) => {
    return state.filter((todo) => todo.id != props.id);
  }),
  on(actions.toggleAllTodo, (state, props) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: props.completado,
      };
    });
  }),
  on(actions.clearTodos, (state) => {
    return state
      .map((todo) => {
        return todo;
      })
      .filter((todo) => !todo.completado);
  })
  // on(actions.clearTodos, (state) =>
  //   state.filter((todo) => {
  //     return !todo.completado;
  //   })
  // )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
