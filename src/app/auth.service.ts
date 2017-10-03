import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  singup(prenom: string, nom: string, courriel: string, password: string, noCivic: string,
  photo: string, app: string, rue: string, codePostal: string, ville: string, province: string ) {

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
       const base64Url = token.split('.')[1];
       const base64 = base64Url.replace('-', '+').replace('_', '/');
      return { token: token, decoded: JSON.parse(window.atob(base64))};
     }
   )
   .do(tokenData => {
     localStorage.setItem('token', tokenData.token);
   }
   );
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
