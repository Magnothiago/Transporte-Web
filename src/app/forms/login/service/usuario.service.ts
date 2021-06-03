import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioDto} from '../../../../model/usuario-dto';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  logar(usuario: UsuarioDto): Observable<UsuarioDto>{
    const url = `${environment.config.URL_API}/usuario/logar`;
    return this.httpCliente.post<UsuarioDto>(url, usuario).pipe(
      map(obj => obj)
    );
  }
}
