import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(
    private httpClient: HttpClient
  ) { }

  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    // Use HttpClient's get method to retrive the shipping data
    return this.httpClient.get('/assets/shipping.json');
  }

}