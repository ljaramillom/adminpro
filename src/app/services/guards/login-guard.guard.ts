import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    public _usuarioService: UsuarioService,
    public _router: Router
    ) {}


  canActivate() {
    if (this._usuarioService.estaLogueado()) {
      console.log('Ok!');
      return true;
    } else {
      console.log('Blocked!');
      this._router.navigate(['/login']);
      return false;
    }
  }
}
