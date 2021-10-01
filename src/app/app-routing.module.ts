import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path:  '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'detalhes-usuario', component: DetalhesUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
