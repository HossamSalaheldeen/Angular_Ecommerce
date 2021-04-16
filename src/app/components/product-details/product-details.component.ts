import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  errors = [];
  productId;
  product: Product ;
  selectedProduct: any = {};
  productForm: FormGroup;

  constructor(private _route: ActivatedRoute, private _productService : ProductsService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(paramMap => {
      if(paramMap.has('ProductId')) {
        this._productService.getProductById(paramMap.get('ProductId')).subscribe((res : any) => {
          this.product = res.data;
          this.saveProductForm();
        })
      }
      this.productId = paramMap.has('ProductId') ? paramMap.get('ProductId') : null;
    })
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      this.selectedProduct = Object.assign(this.selectedProduct,form.value);
      this.saveSelectedProduct(this.selectedProduct);
      
    }
  }

  saveProductForm() {
    this.productForm = this._fb.group({
      image: [this.product.ProductPicUrl],
      name: [this.product.Name],
      price: [this.product.Price],
      quantity: [0, [Validators.required,Validators.min(1)]],
    })
  }

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