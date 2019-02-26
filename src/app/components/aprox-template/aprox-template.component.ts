import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-aprox-template',
  templateUrl: './aprox-template.component.html',
  styleUrls: ['./aprox-template.component.css']
})
export class AproxTemplateComponent implements OnInit {
  // cargar valores por defecto
  user: object = {
    nombre: null,
    apellido: null,
    email: null
  };
  paises: any[] = [{
      codigo: 'COL',
      nombre: 'Colombia'
    },
    {
      codigo: 'EEUU',
      nombre: 'Estados Unidos'
    },
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    }];

  constructor() { }

  ngOnInit() {
  }

  guardar(formulario: NgForm) {
    console.log('Se hizo un submit!');
    console.log(formulario);
    console.log(formulario.value);
  } //  -- $(System.DefaultWorkingDirectory)/Drop/app
}
