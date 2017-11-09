import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CounterService {

  private countdownTimerRef:any = null;
  private init:number = 0;
  public countdown:number = 0;

  private countdownEndSource = new Subject<void>();
  public countdownEnd$ = this.countdownEndSource.asObservable();

  private countdownSource = new BehaviorSubject<number>(0);
  public countdown$ = this.countdownSource.asObservable();

  constructor() { }

  public restartCountdown(init?){
  	this.countdown=init;
      //restart the countdown
      this.countdownSource.next(this.countdown)
      this.doCountdown();
  }

  public destroy(){
      //clean timeout reference
  }

  private doCountdown(){
    //call process countdown after 1 second
    //this.countdown--;
    this.countdownSource.next(this.countdownSource.getValue() -1);
    console.log(this.countdown);
    this.processCountdown();
    
    
  }

  private processCountdown(){
    //check if countdown has finished
    //HERE I SHOULD EMIT THE EVENT
    if(this.countdownSource.getValue() > 0)
    	setTimeout(()=> this.doCountdown(), 1000);
    else {
    	 this.countdownEndSource.next();
    }

  }

  private clearTimeout(){
    //remove countdown reference
  }

}
