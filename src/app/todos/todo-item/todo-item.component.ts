import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/appAppState';
import * as action from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') inputFisico: ElementRef;
  public chkCompletado: FormControl;
  public txtInput: FormControl;
  public edit: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((val) => {
      this.store.dispatch(action.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.edit = true;
    // this.txtInput.patchValue(this.todo.texto);
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      // this.inputFisico.nativeElement.focus();
      this.inputFisico.nativeElement.select();
    }, 1);
  }

  delete() {
    this.store.dispatch(action.deleteTodo({ id: this.todo.id })); 
  }

  finishEditing() {
    try {
      this.edit = false;

      if (this.txtInput.invalid) {
        return;
      }

      if (this.txtInput.value == this.todo.texto) {
        return;
      }

      this.store.dispatch(
        action.editTodo({ id: this.todo.id, texto: this.txtInput.value })
      );
    } catch (error) {
      console.log({ error });
    }
  }
}
