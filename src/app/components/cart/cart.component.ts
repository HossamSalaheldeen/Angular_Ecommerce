import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedproducts: any[];
  total: number;
  constructor() { }

  ngOnInit(): void {
    this.selectedproducts = JSON.parse(localStorage.getItem('selectedProducts'));
    this.total = 0;
    for(let selectedproduct of this.selectedproducts){
      this.total = this.total + (selectedproduct.price * selectedproduct.quantity);
    }
   
    console.log(this.selectedproducts);
  }

}
