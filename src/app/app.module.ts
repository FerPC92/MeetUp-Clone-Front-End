import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {MainService} from './services/main.service'
import {ApiService} from './services/api.service'
import { HttpClientModule, HttpClient} from '@angular/common/http'; 
import {RouterModule , Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EventViewComponent } from './event-view/event-view.component';
import {AuthGuard} from './guards/auth.guard';
import { CreateEventComponent } from './create-event/create-event.component';
import { FooterComponent } from './footer/footer.component';
import { EditEventComponent } from './edit-event/edit-event.component';

let appRoutes : Routes = [
  {"path" : "", "component" :HomeComponent },
  {"path" : "home", "component" : HomeComponent},
  {"path" : "event/new","component" : CreateEventComponent,"canActivate": [AuthGuard]},
  {"path" : "event/:id", "component" : EventViewComponent},
  {"path" : "edit/:id", "component" :EditEventComponent},
  {"path" : "login", "component" : LoginRegisterComponent},
  {"path" : "login/:msg", "component" : LoginRegisterComponent},
  {"path" : "**", "component" : ErrorComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent,
    ErrorComponent,
    EventViewComponent,
    CreateEventComponent,
    FooterComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MainService,ApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
