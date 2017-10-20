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
import { ListArticlesMembresComponent } from './list-articles-membres/list-articles-membres.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';




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
    CdkTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuvZ7GYrN6TOLfWMbGgZ5tw6M6DYexK98'
    }),
    AgmSnazzyInfoWindowModule
    ],
  exports: [AdresseComponent, ListEmpruntsComponent, GoogleMapComponent],
  declarations: [AdresseComponent, ListEmpruntsComponent, FiltreEmpruntPipe,
  DetailEmpruntComponent, ListArticlesMembresComponent, GoogleMapComponent]
})
export class ProfilModule { }
