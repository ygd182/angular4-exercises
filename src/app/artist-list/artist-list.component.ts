import { Component, OnInit } from '@angular/core';
import {ArtistListService } from './artist-list.service';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
	artistListArray: any[];

  constructor( private artistListService: ArtistListService) { }

  ngOnInit() {
  	this.artistListArray = [];
  	this.artistListService.getArtistList().subscribe((data) => {
  		this.artistListArray = data.artists.artist ;
  	});
  }

}
