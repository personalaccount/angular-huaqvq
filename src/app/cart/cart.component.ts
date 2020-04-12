import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {CartService} from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items; // holds the list of items
  checkoutForm; // stores the form model

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  // Set the items using the getItems() method from cart service
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.log(this.items);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}