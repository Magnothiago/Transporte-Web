import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {ClienterouteModule} from './clienteroute/clienteroute.module';
import {NavBarComponent} from '../nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    ClienteComponent,
    ClienteDetalheComponent,
    NavBarComponent
  ],
  exports: [
    ClienteComponent,
    ClienteDetalheComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ClienterouteModule
  ]
})
export class ClienteModule { }
