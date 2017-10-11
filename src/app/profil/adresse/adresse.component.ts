import { Component, OnInit } from '@angular/core';
import { MembreService } from '../../membre.service';
import { Membre } from '../membre.interface';
import { Adresse } from '../adresse.interface';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  id: number;
  membre: Membre;
  step = 0;

  constructor(private membreService: MembreService, public popup: MatSnackBar) { }

  ngOnInit() {
    this.getMembre();
  }

  getMembre() {
    this.membreService.getMembre(72)
    .subscribe(
      (membre: Membre) => this.membre = membre,
      (error: Response) => console.log(error)
    );
  }

  submit() {
    console.log('submit');
    console.log(this.membre);
    // console.log(formProfil.value.nom, formAdresse.value.rue);
     this.membreService.update(72, this.membre)
     .subscribe(
      response => console.log(response),
      error => console.log(error)
    );

    this.notifModification('Modifications effectuées', 'OK');
  }

  notifModification(message: string, action: string) {
    this.popup.open(message, action, {
      duration: 5000,
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

