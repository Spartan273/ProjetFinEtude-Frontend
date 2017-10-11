import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

const authentificationsRoutes: Routes = [
  { path: 'signin', component: ConnexionComponent},
  { path: 'signup', component: InscriptionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(authentificationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthentificationRoutingModule { }
