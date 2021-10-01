import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IAppState, incrementarContador, decrementarContador, definirContador } from './store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-angular';

  constructor(
    private store: Store<{ app: IAppState }>,
    private http: HttpClient,
  ) {}
}
