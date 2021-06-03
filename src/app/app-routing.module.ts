import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente/cliente/cliente.component';
import {LoginComponent} from './forms/login/login.component';

const appRouts: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
