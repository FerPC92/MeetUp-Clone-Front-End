import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service'
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../services/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _routeActive : ActivatedRoute, public _apiService : ApiService  ,public _mainService : MainService) { }

  ngOnInit() {
    
  }

}
