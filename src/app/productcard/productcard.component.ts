import { Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CardlistService } from '../services/cardlist.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {

 
  @Input() product={    
    // "createdAt":'',
    // "name":'',
    // "image":'',
    // "rate":0,
    // "count":0,
    // "description":'',
    // "price":'',
    // "reviews":[],
    // "id":''
    
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',



}
constructor(private router:Router ,
  // private sendcard : CounterService,

  private sendCardItem : CardlistService
  ){}

  addTocard(){
    this.sendCardItem.getCardItem(this.product)
  }



  redirectToDetails(){
    this.router.navigate(['details' , this.product.id])
  }

}

