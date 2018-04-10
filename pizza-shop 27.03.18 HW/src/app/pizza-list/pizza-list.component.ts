import { Component, OnInit } from '@angular/core';

import{getPizzas} from '../models/pizza-info.model';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  public pizzaArray:Array<Pizza>;
  constructor() { 
    this.pizzaArray=getPizzas();
  }

  ngOnInit() {
  }

}
