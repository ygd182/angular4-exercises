import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivateGuard implements CanActivate {

	constructor( private router: Router) {}
  
  canActivate() {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    }
    this.router.navigate(['/login']);
    return 	false;
  }

}