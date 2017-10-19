import { Component, OnInit } from '@angular/core';
import {MembreService} from '../../membre.service';
import {Article} from '../article.interface';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title = 'My first AGM project';
  lat = 45.5803445;
  lng = -73.59926420000001;
  adresse: any;
  markers: any = [];

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
    console.log(this.articles);
    for (let i = 0; i < this.articles.length; i++) {
      this.geocodeAdresse(this.articles, i);

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

    const titre = locations[i].nom;
    // console.log(titre);
    const noCivic = locations[i].membres.adresses.noCivic;
    const rue = locations[i].membres.adresses.rue;
    const codePostal = locations[i].membres.adresses.codePostal;
    // console.log(noCivic);
    // console.log(adresse);
    this.membreService.getLocation(noCivic, rue, codePostal)
    .subscribe(
      (response: Response) => { this.markers.push(response); },
      (error: Response) => console.log(error)
    );

    // console.log(this.adresse);
    console.log(this.markers);
  }

}
