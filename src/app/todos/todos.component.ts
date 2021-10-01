import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { adicionarTodos, IAppState, loadTodos } from '../store/app.state';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$ = this.store.select('app').pipe(map(e => e.todos));

  constructor(
    private store: Store<{ app: IAppState }>,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
