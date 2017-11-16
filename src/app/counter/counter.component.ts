import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import {CounterService} from './counter.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
	@Input() value: number;
	@Output() onComplete = new EventEmitter<void>();
	private countdownEndRef: Subscription = null;
	private countdown: Subscription = null;

	constructor(private counterService: CounterService) { }

	ngOnInit() {
		this.counterService.restartCountdown(this.value);
		this.countdownEndRef = this.counterService.countdownEnd$.subscribe(()=>{
	      this.complete();
	    });

		this.countdown = this.counterService.countdown$.subscribe((value)=>{
			console.log(value);
	      this.value = value;
	    })
			 
	}

	restart() {
		this.counterService.restartCountdown(5);
	}

	complete() {
		this.onComplete.emit();
	}

	ngOnDestroy(){
	    this.counterService.destroy();
	  }

}
