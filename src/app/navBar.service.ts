import { Injectable, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

import 'rxjs/Rx';


@Injectable()
export class NavBarService {


  private navStateSource = new Subject<string>();
  navState$ = this.navStateSource.asObservable();

  setNavBarState (state: string) {
    this.navStateSource.next(state);
  }

}
