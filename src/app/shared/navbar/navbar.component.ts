import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	show: boolean;
  isLoggedIn$: Observable<boolean>;


  constructor(private authService: AuthService) { }

  ngOnInit() {
  	this.show = false;
    this.isLoggedIn$ = this.authService.isLoggedIn;
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

}
