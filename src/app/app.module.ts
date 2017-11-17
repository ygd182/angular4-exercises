import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { UserGeneratorComponent } from './user-generator/user-generator.component';
import {UserGeneratorService} from './user-generator/user-generator.service';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {ArtistListService } from './artist-list/artist-list.service';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistDetailService } from './artist-detail/artist-detail.service';

const ROUTES: Routes = [
  { path: '', redirectTo: '/artist-list', pathMatch: 'full'  },
  { path: 'artist-list', component: ArtistListComponent },
  { path: 'artist-detail/:name', component: ArtistDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserGeneratorComponent,
    ArtistListComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [UserGeneratorService, ArtistListService, ArtistDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
