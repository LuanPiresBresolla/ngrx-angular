import { createAction, createReducer, on, props } from "@ngrx/store"
import { ITodo } from "../todos/todos.component";

export interface IAppState {
  counter: number;
  todos: ITodo[];
}

export const APP_INITIAL_STATE: IAppState = {
  counter: 7,
  todos: [],
}

export const incrementarContador = createAction('INCREMENTAR_CONTADOR');
export const decrementarContador = createAction('DECREMENTAR_CONTADOR');
export const definirContador = createAction('DEFINIR_CONTADOR', props<{ payload: number }>());
export const adicionarTodos = createAction('ADICIONAR_TODOS', props<{ payload: ITodo[] }>());
export const loadTodos = createAction('LOAD_TODOS');
export const sucessoCarregaTodos = createAction('SUCCESS_TODOS');

export const appReducer = createReducer(
  APP_INITIAL_STATE,
  on(incrementarContador, (state) => {
    state = {
      ...state,
      counter: state.counter + 1,
    }

    return state;
  }),
  on(decrementarContador, (state) => {
    state = {
      ...state,
      counter: state.counter - 1,
    }

    return state;
  }),
  on(definirContador, (state, action) => {

    state = {
      ...state,
      counter: action.payload,
    }

    return state;
  }),
  on(adicionarTodos, (state, action) => {

    state = {
      ...state,
      todos: action.payload,
    }

    return state;
  }),
);
