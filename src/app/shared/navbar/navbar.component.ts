import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	show: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	this.show = false;
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

}
