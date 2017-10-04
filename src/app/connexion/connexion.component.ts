import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NavBarService } from '../navBar.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [NavBarService]
})
export class ConnexionComponent implements OnInit {

  constructor(private authService: AuthService, private navBarSerive: NavBarService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {

    this.authService.signin(form.value.courriel, form.value.password)
    .subscribe(
      tokenData => console.log(tokenData),
      error => console.log(error)
    );
    this.navBarSerive.setNavBarState('connecté !');

  }

}
