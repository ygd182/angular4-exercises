import {User} from './../user';

export class UserModel implements User {

	constructor(public name:string, public age:number ) {

	}

	getName(): string { return this.name;}
	getAge() :number { return this.age;}

}