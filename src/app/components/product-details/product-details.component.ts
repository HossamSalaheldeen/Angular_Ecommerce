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
  productId;
  product: Product
  constructor(private _route: ActivatedRoute, private _productService : ProductsService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(paramMap => {
      if(paramMap.has('ProductId')) {
        this._productService.getProductById(paramMap.get('ProductId')).subscribe((res : any) => {
          this.product = res.data;
        })
      }
      this.productId = paramMap.has('ProductId') ? paramMap.get('ProductId') : null;
    })
  }

}
