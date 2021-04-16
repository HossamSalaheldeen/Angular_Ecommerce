import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products : Product[];
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {

    this._productService.getProducts().subscribe((res:any) => {
      console.log(res.data);
      this.products = res.data;
    })
  }

}
