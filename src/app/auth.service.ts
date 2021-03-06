import { Injectable, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  @Output() getLoggedName: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http, private router: Router) {}

  singup(prenom: string, nom: string, courriel: string, password: string, photo: string,
  noCivic: string, app: string, rue: string, codePostal: string, ville: string, province: string ) {

  return this.http.post('http://localhost:8000/api/membres/signup', { nom: nom, prenom: prenom, courriel: courriel,
  password: password, photo: photo, noCivic: noCivic, app: app, rue: rue, codePostal: codePostal,
  ville: ville, province: province},
  {headers: new Headers({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json'  })});


 // const headers = new Headers({'Content-Type': 'application/json'});

  }

  signin(courriel: string, password: string) {
  return this.http.post('http://localhost:8000/api/membres/signin',
   {courriel: courriel, password: password},
   {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
   .map(
     (response: Response) => {
       const token = response.json().token;
       const membre = response.json().membre;
       const code = response.status;
       console.log(code);
       const base64Url = token.split('.')[1];
       const base64 = base64Url.replace('-', '+').replace('_', '/');
      return { token: token, decoded: JSON.parse(window.atob(base64)), membre };
     }
   )
   .do(tokenData => {
     localStorage.setItem('token', tokenData.token);
     localStorage.setItem('id', tokenData.membre[0].id);
     localStorage.setItem('nom', tokenData.membre[0].nom);
     localStorage.setItem('prenom', tokenData.membre[0].prenom);
     localStorage.setItem('courriel', tokenData.membre[0].courriel);
     this.getLoggedName.emit('bob');
     this.router.navigate(['/home']);
   }
   );
  }

  // deconnexion
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('courriel');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
