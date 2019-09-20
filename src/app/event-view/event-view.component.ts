import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainService} from '../services/main.service'
import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  userID:string;

  constructor(public _routeActive : ActivatedRoute, public _apiService : ApiService  ,public _mainService : MainService) { 
    this.userID = localStorage.getItem('userID')
  }

  ngOnInit() {
    this._routeActive.paramMap.subscribe( (params)=> {
      let id = params.get("id");
      this._mainService.getIndividualEvent(id)
    });
  }

}
