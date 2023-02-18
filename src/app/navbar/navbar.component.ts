import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter =0;

  constructor (private CounterService : CounterService ){}


  ngOnInit(): void {
    this.CounterService.counterVal.subscribe((res: number)=> this.counter=res );
 
}
}