import { Component, OnInit } from '@angular/core';
import {ArtistListService } from './artist-list.service';
import { DataCommunication } from '../shared/data-communication/data-communication';
import { DataCommunicationService } from '../shared/data-communication/data-communication.service';
import { FilterQueryPipe } from './../shared/search/filter-query.pipe';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
	artistListArray: any[];
  artistQuery: string;

  constructor( private artistListService: ArtistListService,
   private dataCommunicationService: DataCommunicationService) {
    let dataCommunication = new DataCommunication();
    dataCommunication.id = 'loading-bar';
    dataCommunication.data = { show: true };
    dataCommunicationService.emit(dataCommunication);
  }

  ngOnInit() {
  	this.artistListArray = [];
  	this.artistListService.getArtistList().subscribe((data) => {
  		this.artistListArray = data.artists.artist ;
      let dataCommunication = new DataCommunication();
      console.log('emit');
      dataCommunication.id = 'loading-bar';
      dataCommunication.data = { show: false };
      this.dataCommunicationService.emit(dataCommunication);
  	});

    this.dataCommunicationService.dataCommunicationObservable$.subscribe( (data)=> {
      console.log(data);
      if(data && data.id == 'search') {
        this.artistQuery = data.data;
      }
    });
  }



}
