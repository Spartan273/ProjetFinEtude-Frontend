import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {

  nom = localStorage.getItem('nom');
  prenom = localStorage.getItem('prenom');

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
  this.authService.logout();
  this.router.navigate(['']);
  }

}
