import { Component, OnInit } from '@angular/core';
// for work with forms we need to import this libs, on app.module you need to import ReactiveFormsModule below to the import of FormsModule
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

interface People {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-aprox-data',
  templateUrl: './aprox-data.component.html',
  styleUrls: ['./aprox-data.component.css']
})

export class AproxDataComponent implements OnInit {
  // this object of type FormGroup is the responsible of the form
  form: FormGroup;
  // for the binding with the form we put [formGroup]="nameOfTheObjectoONthisCaseForm" on the html
  peopleExample: People[] = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      email: '@mdo'
    },
    {
      id: 2,
      firstName: 'Martín',
      lastName: 'De Fransisco',
      email: '@mfrans'
    },
    {
      id: 3,
      firstName: 'Santiago',
      lastName: 'Moure',
      email: '@mamerMoure'
    }
  ];
  peopleGet: People;
  loading = true;
  constructor() {
    // on the declaration we have the controls definition, on the controls definition we have the value of the control
    // the validations and the async validations
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,4}')]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]), // for bind each control we must put formControlName="nameofthecontrol" on each control
      lastName: new FormControl('', [Validators.required, this.noLastNameMorales]), // we call Validators to call the validations form the control, we use our validator without ()
      email: new FormControl('',
          [Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
          ]
      ),
      username: new FormControl('', [Validators.required], this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });
    // to set values to the form on an automatic way put this, this works only if the object has the same estructure of the form
    // this.form.setValue(this.user);
    // set the validators in other context, we must put the bind function to assign the this element to the form itself
    this.form.get('password2').setValidators([Validators.required, this.noEqualPassword.bind(this.form)]);
    // subscribe to the observable valueChanges of the form, form only one control use this.form.controls['fieldName'].valueChanges
    this.form.valueChanges.subscribe( data => {
      console.log(data);
    });
    // subscribe to the observable only for status changes of async validations
    this.form.get('username').statusChanges.subscribe( data => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.loadTable();
  }

  getSubmitForm() {
    console.log(this.form);
    console.log(this.form.value);
    // to reset on pristine form do this
    // this.form.reset(this.user);
    // this.form.reset();
    this.peopleExample.push(this.form.value);
  }

  loadTable() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  getIdPerson(id: number) {
    console.log('Mostrando persona: ' + id);
    console.log(this.getPeople(id));
    this.peopleGet = this.getPeople(id);
  }

  getPeople(id: number): People {
    const peopleRes = this.peopleExample.filter((people: People) => {
      if (people.id === id) {
        return people;
      }
    });

    return peopleRes[0];
  }
  // personal validations
  noLastNameMorales(control: FormControl): { [s: string]: boolean } {
    if ( control.value === 'morales') {
      return {nomorales : true};
    }

    return null;
  }

  noEqualPassword(control: FormControl): { [s: string]: boolean } {
    const form: FormGroup = this;
    if ( control.value !== form.get('password1').value) {
      return {noequalpassword : true};
    }

    return null;
  }
  // this validator is async, this returns a promise
  existeUsuario(control: FormControl): Promise<any>|Observable<any> {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'AlocerX') {
          resolve({existeusuario: true, userValidated: control.value});
        } else {
          resolve(null);
        }
      }, 4000);
    });

    return promise;

  }

}
