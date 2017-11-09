import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  private countdownTimerRef:any = null;
  private init:number = 0;
  public countdown:number = 0;

  constructor() { }

  public restartCountdown(init?){
  	this.countdown=init;
      //restart the countdown
      this.doCountdown();
  }

  public destroy(){
      //clean timeout reference
  }

  private doCountdown(){
    //call process countdown after 1 second
    this.countdown--;
    console.log(this.countdown);
    this.processCountdown();
    
    
  }

  private processCountdown(){
    //check if countdown has finished
    //HERE I SHOULD EMIT THE EVENT
    if(this.countdown >0)
    	setTimeout(()=> this.doCountdown(), 1000);
    else {}

  }

  private clearTimeout(){
    //remove countdown reference
  }

}
