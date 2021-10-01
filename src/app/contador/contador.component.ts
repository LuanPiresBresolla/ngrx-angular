import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, incrementarContador, decrementarContador, definirContador } from '../store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor(
    private store: Store<{ app: IAppState }>
  ) {}

  counter$ = this.store.select('app').pipe(map(e => e.counter));

  incrementaContador() {
    this.store.dispatch(incrementarContador());
  }

  decrementaContador() {
    this.store.dispatch(decrementarContador());
  }

  definirContador(valor: string) {
    this.store.dispatch(definirContador({ payload: Number(valor) }));
  }

  ngOnInit(): void {
  }

}
