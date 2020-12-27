import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtrosValidos?: filtrosValidos): Todo[] {
    // console.log({filtrosValidos})
    switch (filtrosValidos) {
      case 'completados':
        return todos.filter((todos) => todos.completado);
      case 'pendientes':
        return todos.filter((todos) => !todos.completado);
      default:
        return todos;
    }
  }
}
