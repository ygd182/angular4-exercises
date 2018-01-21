import { Component, OnInit } from '@angular/core';
import { DataCommunication } from '../data-communication/data-communication';
import { DataCommunicationService } from '../data-communication/data-communication.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {
	show: boolean;

  constructor(private dataCommunicationService: DataCommunicationService) { }

  ngOnInit() {
  	this.show = false;
    this.dataCommunicationService.dataCommunicationObservable$.subscribe((data)=>{
      console.log(data);
      if(data && data.id == 'loading-bar') {
        this.show = data.data.show;
      }
    });
  }

  showBar() {
  	this.show = true;
  }

  hideBar() {
  	this.show = false;
  }

}
