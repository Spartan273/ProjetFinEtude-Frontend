import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdresseComponent } from './adresse/adresse.component';
import {MatExpansionModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ListEmpruntsComponent } from './list-emprunts/list-emprunts.component';
import {FiltreEmpruntPipe} from './filtre-emprunts.pipe';
import { DetailEmpruntComponent } from './detail-emprunt/detail-emprunt.component';



@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [AdresseComponent, ListEmpruntsComponent],
  declarations: [AdresseComponent, ListEmpruntsComponent, FiltreEmpruntPipe, DetailEmpruntComponent]
})
export class ProfilModule { }
