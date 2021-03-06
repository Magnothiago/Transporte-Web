import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClienteDto} from '../../model/cliente-dto';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpCliente: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  clientes: ClienteDto[];

  listClientes(): Observable<ClienteDto[]>{
    const url = `${environment.config.URL_API}/cliente/`;
    return this.httpCliente.get<ClienteDto[]>(url).pipe(
      map((clientes) => clientes)
    );
  }

  salvarCliente(cliente: ClienteDto): Observable<ClienteDto>{
    const url = `${environment.config.URL_API}/cliente/add`;
    return this.httpCliente.post<ClienteDto>(url, cliente).pipe(
      map(obj => obj),
      catchError(ex => this.errorHandler(ex))
    );
  }
  editarCliente(cliente: ClienteDto): Observable<ClienteDto> {
    const url = `${environment.config.URL_API}/cliente/edit`;
    return this.httpCliente.post<ClienteDto>(url, cliente).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any>{
    this.showMessage('Deu ruim!', true );
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  buscarClientesPorId(id: number): Observable<ClienteDto> {
    const url = `${environment.config.URL_API}/cliente/` ;
    return this.httpCliente.get<ClienteDto>(url + id).pipe(
      map((cliente) => cliente),
      catchError( (ex) => this.errorHandler(ex))
    );
  }

}
