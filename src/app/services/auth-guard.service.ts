import { Injectable } from '@angular/core';

// Las implementaciones mas necesarias son Router y CanActivate
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }
  // este metodo es el que nos ayuda a validar que si se esta autenticado pueda ver la ruta parametrizada
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);
    console.log(state);
    if (this.auth.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard.');
      return false;
    }
  }
}
