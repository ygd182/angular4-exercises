import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { ActivateGuard } from './app.activate.guard';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistListService } from './artist-list/artist-list.service';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistDetailService } from './artist-detail/artist-detail.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Routing,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ArtistListService, ArtistDetailService, ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
