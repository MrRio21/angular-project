import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from "../card";

@Injectable({
  providedIn: 'root'
})
export class CardlistService {

 private cardList = new BehaviorSubject<Card[]>([]);
  cardListVal = this.cardList.asObservable();
  constructor() { }

//cardListCounter
  getCardItem(product: Card) {

    if (!this.cardList.value.find((cardItem) => product.id == cardItem.id)) {
      this.cardList.next(this.cardList.getValue().concat([product]));
      console.log(this.cardList)

    }

  }

}
