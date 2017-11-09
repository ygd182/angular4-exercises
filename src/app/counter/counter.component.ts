import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService]
})
export class CounterComponent implements OnInit {
	@Input() value: number;
	@Output() onComplete = new EventEmitter<void>();

	constructor(private counterService: CounterService) { }

	ngOnInit() {
		 this.counterService.restartCountdown(this.value);
		 
	}

	restart() {
		this.counterService.restartCountdown(this.value);
	}

	complete() {
		this.onComplete.emit();
	}

}
