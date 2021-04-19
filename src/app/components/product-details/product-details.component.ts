import { SaveProductService } from './../../services/save-product.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  loading_img: string = "/assets/images/loading.gif";


  constructor(private _route: ActivatedRoute, private _productService : ProductsService, private _fb: FormBuilder, private _saveProductService:SaveProductService,private _router: Router) { }

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
      this._saveProductService.saveSelectedProduct(this.selectedProduct);
      this._router.navigate(['/cart']);
    }
  }

  saveProductForm() {
    this.productForm = this._fb.group({
      image: [this.product.ProductPicUrl],
      name: [this.product.Name],
      price: [this.product.Price],
      maxQuantity: [this.product.Quantity],
      quantity: [0, [Validators.required,Validators.min(1),Validators.max(this.product.Quantity)]],
    })
  }



}
