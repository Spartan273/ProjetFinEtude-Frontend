import { Injectable, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import {Membre} from './profil/membre.interface';
import {Adresse} from './profil/adresse.interface';




@Injectable()
export class MembreService {

  constructor(private http: Http, private router: Router) {}

  getMembre(id: number) {

    return this.http.get('http://localhost:8000/api/membres/72')
    .map(
      (response: Response) => {
        return response.json().membre;
      }
    );

  }



  update(id: number, membre: Membre) {
    const body = JSON.stringify({nom: membre.nom, prenom: membre.prenom, courriel: membre.courriel,
    photo: membre.photo, noCivic: membre.adresses.noCivic, app: membre.adresses.app,
    rue: membre.adresses.rue, codePostal: membre.adresses.codePostal, ville: membre.adresses.ville,
    province: membre.adresses.province});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://localhost:8000/api/membres/' + id, body, {headers: headers})
    .map(
      (response: Response) => {
        return response;
      }
    );


  }

}
