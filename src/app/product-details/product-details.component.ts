import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productsDB } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = productsDB[+params.get('productId')];
    });
  }

}