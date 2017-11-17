import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { UserModel } from './../models/userModel';

@Injectable()
export class UserGeneratorService {

	private userGeneratorSource = new Subject<UserModel>();
	public userObservable$ = this.userGeneratorSource.asObservable();

  	constructor() {

  		setInterval(()=> this.userGeneratorSource.next(new UserModel('pepe', 1)), 1000); 
  	}



}
