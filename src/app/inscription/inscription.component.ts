import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { FormArray } from '@angular/forms';
import { FormArrayName } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }

  onSignup(form: NgForm) {
    this.authService.singup(form.value.prenom, form.value.nom, form.value.courriel,
    form.value.password, form.value.photo, form.value.noCivic, form.value.app, form.value.rue, form.value.codePostal, form.value.ville,
    form.value.province).subscribe(
      response => console.log(response),
      error => console.log(error)
    );


    this.router.navigate(['/signin']);

  }

}
