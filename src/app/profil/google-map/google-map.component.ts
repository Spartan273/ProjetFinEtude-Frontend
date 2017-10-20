import { Component, OnInit } from '@angular/core';
import {MembreService} from '../../membre.service';
import {Article} from '../article.interface';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title = 'Articles dans ma région';
  lat = 45.5803445;
  lng = -73.59926420000001;
  adresse: any;
  markers: any = [];
  recherche: any = [];

  articles: Article[];
  location: any = [];

   locations =  [
    { nom: 'Bondi Beach', adresse: '850 Bay st 04 Toronto, Ont'},
    { nom: 'Coogee Beach', adresse: '932 Bay Street, Toronto, ON M5S 1B1'},
    { nom: 'Cronulla Beach', adresse: '61 Town Centre Court, Toronto, ON M1P'},
    { nom: 'Manly Beach', adresse: '832 Bay Street, Toronto, ON M5S 1B1'}
  ];


  constructor(private membreService: MembreService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.membreService.getArticles()
    .subscribe(
      (articles: Article[]) => this.articles = articles,
      (error: Response) => console.log(error)
    );
  }

  displayArticles() {
    console.log(this.recherche.length);
    for (let i = 0; i < this.recherche.length; i++) {
      this.geocodeAdresse(this.recherche, i);

    }
   /* this.membreService.getLocation()
    .subscribe(
      (response: Response) => this.location = response,
      (error: Response) => console.log(error)
    );

    console.log(this.location);
    console.log(this.location[0].formatted_address);
    console.log(this.location[0].geometry.location.lat);
    console.log(this.location[0].geometry.location.lng);
    console.log(this.articles[0].nom);
    // console.log(this.location.formatted_address); */
  }

  geocodeAdresse(locations, i: number) {
    console.log('location');
    console.log(locations);

    const titre = locations[i].nom;
     console.log(titre);
    const noCivic = locations[i].membres.adresses.noCivic;
    const rue = locations[i].membres.adresses.rue;
    const codePostal = locations[i].membres.adresses.codePostal;
     console.log(noCivic);
     console.log(rue);
    this.membreService.getLocation(noCivic, rue, codePostal)
    .subscribe(
      (response: Response) => { this.markers.push(response); },
      (error: Response) => console.log(error)
    );

    // console.log(this.adresse);
    console.log('markers');
    console.log(this.markers);
  }

  rechercher(recherche: string) {

 let reg = new RegExp(recherche.toLowerCase());
    for (let i = 0; i < this.articles.length; i++) {

    if ( reg.test(this.articles[i].nom.toLowerCase()) ) {
          this.recherche.push(this.articles[i]);
      }
    }
    console.log('tab recherche');
    console.log(this.recherche);
    this.displayArticles();
  }

}
