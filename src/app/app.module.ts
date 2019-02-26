import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importaciones para este proyecto adicionales
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // Este modulo solo se usa con formularios
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// servicio
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import { AproxTemplateComponent } from './components/aprox-template/aprox-template.component';
import { AproxDataComponent } from './components/aprox-data/aprox-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    AproxTemplateComponent,
    AproxDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // AuthGuardService // se importa el servicio de auth0
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
