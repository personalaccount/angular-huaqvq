import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items; // holds the list of items

  constructor(
    private cartService: CartService
  ) { }

  // Set the items using the getItems() method from cart service
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}