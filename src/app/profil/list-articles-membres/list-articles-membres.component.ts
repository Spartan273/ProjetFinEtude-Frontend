import { Component, OnInit } from '@angular/core';
import {MembreService} from '../../membre.service';

@Component({
  selector: 'app-list-articles-membres',
  templateUrl: './list-articles-membres.component.html',
  styleUrls: ['./list-articles-membres.component.css']
})
export class ListArticlesMembresComponent implements OnInit {

  id = localStorage.getItem('id');

  constructor(private membreService: MembreService) { }

  ngOnInit() {
  }

  getArticles() {

  }

}
