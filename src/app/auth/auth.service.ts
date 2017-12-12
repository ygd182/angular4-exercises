import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
  	if(!this.loggedIn.value) {
  		const token = sessionStorage.getItem('isLoggedIn');
  		if(token) {
  			this.loggedIn.next(true);
  		}
  	} 
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(){
  	sessionStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}