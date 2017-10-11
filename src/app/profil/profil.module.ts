import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdresseComponent } from './adresse/adresse.component';
import {MatExpansionModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  exports: [AdresseComponent],
  declarations: [AdresseComponent]
})
export class ProfilModule { }
