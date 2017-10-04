import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { AccueilComponent } from './accueil/accueil.component';

// routes
const appRoutes: Routes = [

  { path: 'signin', component: ConnexionComponent},
  { path: 'signup', component: InscriptionComponent },
  { path: 'home', component: NavbarLoginComponent },
  { path: '', component: AccueilComponent }


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
