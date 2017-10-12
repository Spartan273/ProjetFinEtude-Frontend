import { Component, OnInit } from '@angular/core';
import { MembreService } from '../../membre.service';
import { Membre } from '../membre.interface';
import { Adresse } from '../adresse.interface';
import { NgForm } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  id = Number(localStorage.getItem('id'));
  membre: Membre;
  step = 0;

  constructor(private membreService: MembreService, private popup: MatSnackBar) { }

  ngOnInit() {
    this.getMembre();
  }

  getMembre() {
    this.membreService.getMembre(this.id)
    .subscribe(
      (membre: Membre) => this.membre = membre,
      (error: Response) => console.log(error)
    );
  }

  submit() {

    console.log(this.membre);
     this.membreService.update(this.id, this.membre)
     .subscribe(
      response => console.log(response),
      error => console.log(error)
    );

    this.notifModification('Modifications effectuées', 'OK');
  }

  notifModification(message: string, action: string) {
    this.popup.open(message, action, {
      duration: 5000,
      verticalPosition: 'top'
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

