import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavBarService } from '../navBar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavBarService]
})
export class NavbarComponent implements OnInit {

  nom1 = localStorage.getItem('nom');
  nom = 'test';
  prenom = localStorage.getItem('prenom');
  courriel = localStorage.getItem('courriel');
  etat: string;

  constructor(private authService: AuthService, private navBarService: NavBarService ) {

   // authService.getLoggedName.subscribe(name => this.changeName(name));
   // this.navState$.subscribe( (state)=> this.state = state );
   navBarService.navState$.subscribe((state) => this.etat = state );

   // this.navBarService.setNavBarState(state);
  }

  ngOnInit() {


  }

  private changeName(name: string) {
    this.nom = name;

  }

}
