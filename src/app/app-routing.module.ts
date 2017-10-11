import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { AccueilComponent } from './accueil/accueil.component';

import { AdresseComponent } from './profil/adresse/adresse.component';

// routes
const appRoutes: Routes = [

  { path: '', component: AccueilComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'home', component: NavbarLoginComponent }



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
