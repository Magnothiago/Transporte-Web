import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteComponent} from '../cliente/cliente.component';
import {ClienteDetalheComponent} from '../cliente-detalhe/cliente-detalhe.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-detalhe', component: ClienteDetalheComponent},
  {path: 'cliente-detalhe/id', component: ClienteDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienterouteRoutingModule { }
