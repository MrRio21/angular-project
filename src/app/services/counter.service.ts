import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterData= new BehaviorSubject (1);
  counterVal = this.counterData.asObservable();
  CardlistService: any;
  
    constructor() { }
  
    updateCounter(newVal : number){
      this. counterData.next(newVal)
    }
}
