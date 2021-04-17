import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedproducts: any[];
  status: boolean[]= [false];
  total: number;
  
  constructor() { }

  ngOnInit(): void {
    this.selectedproducts = JSON.parse(localStorage.getItem('selectedProducts'));
    this.total = 0;
    let i = 0;
    for(let selectedproduct of this.selectedproducts){
      this.total = this.total + (selectedproduct.price * selectedproduct.quantity);
      this.status[i] = false;
      i = i + 1;
      console.log(this.status)
    }
    
    console.log(this.selectedproducts);
  }

  Delete(index) {
    this.selectedproducts.splice(index,1);
    localStorage.setItem('selectedProducts',JSON.stringify(this.selectedproducts));
  }

  Save(index) {
    localStorage.setItem('selectedProducts',JSON.stringify( this.selectedproducts));
  }

  Checkout(index) {
    this.status[index] = true;
  }

}
