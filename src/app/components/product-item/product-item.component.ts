import { SaveProductService } from './../../services/save-product.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  selectedProduct: any = {};
  productForm: FormGroup;
  isSubmitted : boolean = false;
  constructor(private _fb: FormBuilder, private _saveProductService:SaveProductService) { }

  ngOnInit(): void {
    this.saveProductForm();
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      this.isSubmitted = true;
      this.selectedProduct = Object.assign(this.selectedProduct,form.value);
      this._saveProductService.saveSelectedProduct(this.selectedProduct);
      
    }
  }

  saveProductForm() {
    this.productForm = this._fb.group({
      image: [this.product.ProductPicUrl],
      name: [this.product.Name],
      price: [this.product.Price],
      quantity: [0, [Validators.required,Validators.min(1),Validators.max(this.product.Quantity)]],
    })
  }
}
