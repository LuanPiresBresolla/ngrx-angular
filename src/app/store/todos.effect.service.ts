import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ITodo } from '../todos/todos.component';
import { IAppState, loadTodos, sucessoCarregaTodos, adicionarTodos } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class TodosEffectService {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{ app: IAppState }>,
  ) { }

  carregaTodos = createEffect(() => this.actions$.pipe(
    ofType(loadTodos),
    withLatestFrom(this.store.select('app').pipe(map(e => e.todos))),
    switchMap(([action, todos]) => {
      if (todos.length === 0) {
        return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
          tap(todos => this.store.dispatch(adicionarTodos({ payload: todos }))),
          map(() => sucessoCarregaTodos())
        )
      }

      return of(sucessoCarregaTodos());
    }),
  ));
}
