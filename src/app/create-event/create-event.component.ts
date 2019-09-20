import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MainService } from '../services/main.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  form:object= {
    eventGroup:"" ,
    eventName:"",
    eventPlace : "",
    eventTakePlaceAt : "",
    eventAdress : "",
    eventFromHour : "",
    eventToHour : "",
    eventDescription : "",
    eventImg : "",
    eventOrganizer : "",
    eventDate : ""
  }


  createEvent(){
    this._mainService.createEvent(this.form)
    setTimeout(()=> { this._router.navigateByUrl('/home') }, 3000);
    setTimeout(()=> { window.location.reload()}, 4000);
    
  }

  constructor(public _mainService : MainService, public _router :Router) { }

  ngOnInit() {
  }

}
