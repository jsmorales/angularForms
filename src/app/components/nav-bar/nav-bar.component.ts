import { Component, OnInit } from '@angular/core';

// se importa el servicio auth acá porque desde aca se llama el metodo login de ese service
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AuthService) {
    // este metodo lo llama el componente que utiliza el servicio
    this.auth.handleAuthentication();
  }

  ngOnInit() {
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
  // example@example.io
  // 3115208657aA
}
