import { Component, OnInit } from '@angular/core';
import {UserGeneratorService} from './user-generator.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user-generator',
  templateUrl: './user-generator.component.html',
  styleUrls: ['./user-generator.component.css']
})
export class UserGeneratorComponent implements OnInit {

  constructor(private userGeneratorService: UserGeneratorService) { }

  ngOnInit() {
	this.userGeneratorService.userObservable$.subscribe((value) => console.log(value));
  }

}
