import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveProductService {

  constructor() { }

  saveSelectedProduct(selectedProduct) {
    let selectedProducts = [];
    let productIndex : number;
    if(localStorage.getItem('selectedProducts')) {
      selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
      if(selectedProducts.some(product => product.name === selectedProduct.name)){
        productIndex = selectedProducts.findIndex((product => product.name == selectedProduct.name));
        selectedProducts[productIndex].quantity = selectedProduct.quantity;
      }else {
        selectedProducts.push(selectedProduct);
      }
      
      //selectedProducts = [selectedProduct, ...selectedProducts];
    }
    else {
      selectedProducts = [selectedProduct];
    }
    localStorage.setItem('selectedProducts',JSON.stringify(selectedProducts));
  }
}
