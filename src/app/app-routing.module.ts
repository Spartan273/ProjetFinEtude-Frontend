import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

// routes
const appRoutes: Routes = [
  { path: 'signin', component: ConnexionComponent},
  { path: 'signup', component: InscriptionComponent }

];

@NgModule({
 imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
