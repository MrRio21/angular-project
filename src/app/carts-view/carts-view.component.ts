import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { ProductService } from '../services/product.service';
import { Card } from '../card';
import { CardlistService } from '../services/cardlist.service';
// import { Data } from '@angular/router';

// import { Injectable } from '@angular/core';

@Component({
  selector: 'app-carts-view',
  templateUrl: './carts-view.component.html',
  styleUrls: ['./carts-view.component.css']
})
export class CartsViewComponent implements OnInit{
  prductlist:Array<Card>=[];

 
Tprice=0;

constructor (private CounterService : CounterService ,
  private CardlistService : CardlistService )
{ }
ngOnInit(): void {

    this.CardlistService.cardListVal.subscribe((res: any) => this.prductlist = res);
 
 
    
}


// increaseCounter(){
//   this.CounterService.updateCounter(++ this .counter)
// }
// decreaseCounter(){
//   this.CounterService.updateCounter(-- this .counter)
// }


TProductCount=0
receiveFromChild(value:any)
{
  // 
  for(let i=0;i<this.prductlist.length ;i++)
  {
    this.Tprice += parseInt((this.prductlist[i].price)) * parseInt(value);
  }


  this.TProductCount += parseInt(value);
}

   }
 

