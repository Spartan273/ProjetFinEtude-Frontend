import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { FormsModule } from '@angular/forms';


import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from '../navbar/navbar.component';





@NgModule({
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule
  ],
  exports: [NavbarComponent],
  declarations: [
    ConnexionComponent,
    InscriptionComponent,
    NavbarComponent
  ],
  providers: []
})
export class AuthentificationModule {}
