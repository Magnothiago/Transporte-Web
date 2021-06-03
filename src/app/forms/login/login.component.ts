import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from './service/usuario.service';
import {UsuarioDto} from '../../../model/usuario-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  usuario: UsuarioDto = new UsuarioDto();
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.usuarioService.logar(this.usuario).subscribe(
      resp => {
        if (resp != null){
          this.router.navigate(['/cliente/']);
          this.usuario = new UsuarioDto();
        }else {
          this.usuario = new UsuarioDto();
          alert('Dados inválidos');
        }
      }
    );
  }
}
