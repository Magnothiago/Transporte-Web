import { Component, OnInit } from '@angular/core';
import {ClienteDto} from '../../../model/cliente-dto';
import {ClienteService} from '../cliente.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private location: Location
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'cpf'];

  cliente: ClienteDto = {
    id: 0,
    nome: 'Teste',
    cpf: '61350593001',
    dataNascimento: new Date(2001, 1, 1),
  };
  // clientes: ClienteDto[] = [
  //   {id: 1, nome: 'Cliente 1', cpf: '111.111.111-11', primeiroNome: 'Cliente 1', dataNascimento: new Date(2001,10,10), versao: 1 },
  //   {id: 2, nome: 'Cliente 2', cpf: '222.222.222-22', primeiroNome: 'Cliente 2', dataNascimento: new Date(2002,10,10), versao: 1 },
  //   {id: 3, nome: 'Cliente 3', cpf: '333.333.333-33', primeiroNome: 'Cliente 3', dataNascimento: new Date(2003,10,10), versao: 1 }
  // ];

  clientes: ClienteDto[];

  dataSource;

  ngOnInit(): void {
    this.clienteService.listClientes().subscribe(dados => {
      this.clientes = dados;
      this.dataSource = this.clientes;
    });
  }
  salvar(): void {
    this.clienteService.salvarCliente(this.cliente).subscribe((dados) =>{
      this.clienteService.showMessage('Cliente salvo',false);
      this.clientes.push(dados);
      this.dataSource = this.clientes;
      location.reload();
    });
  }

}
