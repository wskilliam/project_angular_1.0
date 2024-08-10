import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';

// Aqui o que fazermos: dentro do 'const routes: Routes = []' ficará vazio []
//colocamos o caminho que chamos de path:

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
