import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { FormControl } from '@angular/forms';

import {CompatibilityModule} from '@angular/material';
import {NoConflictStyleCompatibilityMode} from '@angular/material';

import { AuthentificationModule } from './authentification/authentification.module';
import { ProfilModule } from './profil/profil.module';


import { AuthService } from './auth.service';
import { MembreService } from './membre.service';



import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    NavbarLoginComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CompatibilityModule,
    NoConflictStyleCompatibilityMode,
    AuthentificationModule,
    ProfilModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, MembreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
