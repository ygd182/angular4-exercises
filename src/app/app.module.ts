import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataCommunication } from './shared/data-communication/data-communication';

import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataCommunicationService } from './shared/data-communication/data-communication.service';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistListService } from './artist-list/artist-list.service';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistDetailService } from './artist-detail/artist-detail.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FilterQueryPipe } from './shared/search/filter-query.pipe';
import { LoadingBarComponent } from './shared/loading-bar/loading-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    LoginComponent,
    NavbarComponent,
    FilterQueryPipe,
    LoadingBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Routing,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ArtistListService, 
    ArtistDetailService, 
    AuthGuardService, 
    AuthService,
    DataCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
