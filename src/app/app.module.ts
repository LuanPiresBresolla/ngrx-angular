import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayContadorComponent } from './display-contador/display-contador.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ContadorComponent } from './contador/contador.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { TodosComponent } from './todos/todos.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffectService } from './store/todos.effect.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContadorComponent,
    ContadorComponent,
    DetalhesUsuarioComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodosEffectService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
