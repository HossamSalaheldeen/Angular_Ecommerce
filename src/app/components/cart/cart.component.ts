import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  selectedproducts: any[] = [0];
  status: boolean[] = [false];
  status_all: boolean = false;
  total: number;

  constructor() {}

  ngOnInit(): void {
    this.selectedproducts = JSON.parse(
      localStorage.getItem('selectedProducts')
    );
    if (this.selectedproducts) {
      this.total = 0;
      let i = 0;
      for (let selectedproduct of this.selectedproducts) {
        this.total = this.total + selectedproduct.price * selectedproduct.quantity;
        this.status[i] = false;
        i = i + 1;
      }
    }

    console.log(this.selectedproducts);
  }

  Delete(index) {
    this.selectedproducts.splice(index, 1);
    console.log(this.selectedproducts);
    if (this.selectedproducts.length == 0) {
      this.Delete_All();
      console.log(this.selectedproducts.length);
    } else {
      localStorage.setItem(
        'selectedProducts',
        JSON.stringify(this.selectedproducts)
      );
      this.calculateTotal();
    }
  }

  Delete_All() {
    this.selectedproducts = [];
    localStorage.clear();
    this.total = 0;

  }

  Save(index) {
    localStorage.setItem(
      'selectedProducts',
      JSON.stringify(this.selectedproducts)
    );
    this.calculateTotal();
  }

  Save_All() {
    localStorage.setItem(
      'selectedProducts',
      JSON.stringify(this.selectedproducts)
    );
    this.calculateTotal();
  }

  Checkout(index) {
    this.status[index] = true;
  }

  Checkout_All() {
    this.status_all = true;
    let i = 0;
    for (i = 0; i < this.status.length; ++i) {
      this.status[i] = true;
    }
  }

  calculateTotal(){
    this.total = 0
    for (let selectedproduct of this.selectedproducts) {
      this.total = this.total + selectedproduct.price * selectedproduct.quantity;
    }
  }
}
