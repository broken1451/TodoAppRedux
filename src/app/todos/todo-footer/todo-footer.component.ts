import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/filter/filter.actions';
import * as action from 'src/app/todos/todo.actions';
import { AppState } from '../../interfaces/appAppState';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  public filtroActual: actions.filtrosValidos = 'todos';
  public filtros: actions.filtrosValidos[] = [
    'todos',
    'pendientes',
    'completados',
  ];

  public pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('filtro').subscribe((filtro) => {
    // this.filtroActual = filtro
    //   console.log({ filtro });
    // });
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => {
        // return todo.completado == false
        return !todo.completado;
      }).length;
    });
  }

  cambiarFilter(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFilter({ filtro: filtro }));
  }

  clear() {
    this.store.dispatch(action.clearTodos());
  }
}
