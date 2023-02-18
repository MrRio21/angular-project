import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-view-item',
  templateUrl: './cart-view-item.component.html',
  styleUrls: ['./cart-view-item.component.css']
})
export class CartViewItemComponent implements OnInit {
  @Input() data={  
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
image:''
   } 
@Output() Itemcount= new EventEmitter()

Itemcounter=1;
counter =0;



   constructor (private CounterService : CounterService ){}

   ngOnInit(): void {
    this.CounterService.counterVal.subscribe((res: number)=> this.counter=res );
    this.Itemcount.emit(
      this.Itemcounter
    )
   }
   increaseCounter(){
   this.Itemcounter ++;
    this.CounterService.updateCounter(++this.counter)
    this.Itemcount.emit(
      this.Itemcounter)
  }
  decreaseCounter(){
    this.Itemcounter --;
    this.CounterService.updateCounter(--this.counter)
    this.Itemcount.emit(
      this.Itemcounter)

  }

 
  


}
