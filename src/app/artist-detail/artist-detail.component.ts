import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetailService } from './artist-detail.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  name: string;
  private sub: any;
  artist: any;

  constructor(private route: ActivatedRoute,
  				private artistDetailService: ArtistDetailService) {}

  ngOnInit() {
  	let observablesArray = []; 
  	this.artist = {
  		topTracks : [],
		topAlbums:  []
	};

  	this.sub = this.route.params.subscribe(params => {
       this.name = params['name']; 
       observablesArray.push( this.artistDetailService.getArtistDetails(this.name));
       observablesArray.push(this.artistDetailService.getArtistTopTracks(this.name));
       observablesArray.push(this.artistDetailService.getArtistTopAlbums(this.name));
       
        Observable.forkJoin(observablesArray).subscribe((data: any) => {
        	console.log(data);
	       	this.artist = data[0].artist;
	       	this.artist.img = data[0].artist.image[0]['#text'];
	       	this.artist.topTracks = data[1].toptracks.track;
	       	this.artist.topAlbums = data[2].topalbums.album;
       });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
