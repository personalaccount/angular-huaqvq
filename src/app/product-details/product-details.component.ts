import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productsDB } from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert(product.name + ' added to cart');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productsDB[+params.get('productId')];
    });
  }

}