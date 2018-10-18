import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataCommunication } from './data-communication';

@Injectable()
export class DataCommunicationService {

	private dataCommunicationSource = new BehaviorSubject<DataCommunication>(null);
	public dataCommunicationObservable$ = this.dataCommunicationSource.asObservable();

  constructor() { }

  emit(dataCommunication: DataCommunication) {
  	this.dataCommunicationSource.next(dataCommunication);
  }

}
