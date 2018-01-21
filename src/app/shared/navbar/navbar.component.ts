import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { DataCommunication } from '../data-communication/data-communication';
import { DataCommunicationService } from '../data-communication/data-communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	show: boolean;
  isLoggedIn$: Observable<boolean>;
  searchValue: string;


  constructor(private authService: AuthService,
              private dataCommunicationService: DataCommunicationService) { }

  ngOnInit() {
  	this.show = false;
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.searchValue = '';
  }

  getLoggedIn() {
  	this.authService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn){
          this.show = false;
        }else {
        	 this.show = true;
        }
      });
  }

  logout() {
    this.authService.logout();
  }

  doSearch($event) {
    let dataCommunication = new DataCommunication();
    dataCommunication.id = 'search';
    dataCommunication.data = this.searchValue;
    this.dataCommunicationService.emit(dataCommunication);
  }

}
