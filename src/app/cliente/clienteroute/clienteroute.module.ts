import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienterouteRoutingModule } from './clienteroute-routing.module';
import {ClienteComponent} from '../cliente/cliente.component';
import {ClienteDetalheComponent} from '../cliente-detalhe/cliente-detalhe.component';
import {RouterModule, Routes} from '@angular/router';

const clienteRoutes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-detalhe', component: ClienteDetalheComponent}
];


@NgModule({
  declarations: [],
  imports: [CommonModule, ClienterouteRoutingModule],
  exports: [RouterModule]
})

export class ClienterouteModule { }
