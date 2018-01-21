import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetailService } from './artist-detail.service';
import { FilterQueryPipe } from './../shared/search/filter-query.pipe';
import { DataCommunication } from '../shared/data-communication/data-communication';
import { DataCommunicationService } from '../shared/data-communication/data-communication.service';
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
  songQuery: string;

  constructor(private route: ActivatedRoute,
  				private artistDetailService: ArtistDetailService,
           private dataCommunicationService: DataCommunicationService) {
    let dataCommunication = new DataCommunication();
    dataCommunication.id = 'loading-bar';
    dataCommunication.data = { show: true };
    dataCommunicationService.emit(dataCommunication);
  }

  ngOnInit() {
    this.songQuery = 'a';
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
	       	this.artist = data[0].artist;
	       	this.artist.img = data[0].artist.image[3]['#text'];
	       	this.artist.topTracks = data[1].toptracks.track;
	       	this.artist.topAlbums = data[2].topalbums.album;
          this.emitLoadingFinished();
       });
    });

     this.dataCommunicationService.dataCommunicationObservable$.subscribe( (data)=> {
      console.log(data);
      if(data && data.id == 'search') {
        this.songQuery = data.data;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

   emitLoadingFinished() {
     let dataCommunication = new DataCommunication();
      console.log('emit');
      dataCommunication.id = 'loading-bar';
      dataCommunication.data = { show: false };
      this.dataCommunicationService.emit(dataCommunication);
  }

}
