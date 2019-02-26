import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';

import {AproxDataComponent} from './components/aprox-data/aprox-data.component';
import {AproxTemplateComponent} from './components/aprox-template/aprox-template.component';

import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'formTemplate', component: AproxTemplateComponent},
      { path: 'formData', component: AproxDataComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'formTemplate'}
    ]
  },
  { path: 'precios', component: PreciosComponent},
  { path: 'protegida', component: ProtegidaComponent, canActivate: [AuthGuardService] }, // canActivate: [AuthGuardService] --> contiene el arreglo de validaciones para poder acceder a esta pagina
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
// { path: 'home', component: HttpClientComponent},
// { path: '**', pathMatch: 'full', redirectTo: 'home'}

// auth0
// domain --> alocerx.auth0.com
// ClientID --> SNRBo0B3TzGbmkepnC4zUS1A42hnX1ps

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
