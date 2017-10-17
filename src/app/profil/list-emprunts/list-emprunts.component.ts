import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import {Emprunt} from '../emprunt.interface';
import {Article} from '../article.interface';
import {MembreService} from '../../membre.service';
import {MatTableModule} from '@angular/material';
import {FiltreEmpruntPipe} from '../filtre-emprunts.pipe';

@Component({
  selector: 'app-list-emprunts',
  templateUrl: './list-emprunts.component.html',
  styleUrls: ['./list-emprunts.component.css']
})
export class ListEmpruntsComponent implements OnInit {

  id = Number(localStorage.getItem('id'));
  emprunts: Emprunt;
  detailEmprunt: Emprunt;
  articles: Article;
  filter: Emprunt;

  constructor(private membreService: MembreService, private router: Router) { }

  details = false;
  global = true;

  ngOnInit() {
    this.getEmprunts();
  }

  getEmprunts() {
    this.membreService.getEmprunts(this.id)
    .subscribe(
      (emprunts: Emprunt) =>  this.emprunts = emprunts,
      (error) => console.log(error)
    );
  }

  selectEmprunt(emprunt: Emprunt) {
    this.global = false;
    this.details = true;
    this.detailEmprunt = emprunt;
  }

  goBack() {
    this.details = false;
    this.global = true;
  }

}
