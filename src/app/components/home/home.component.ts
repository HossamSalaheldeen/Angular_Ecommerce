import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products : Product[];
  pageTotalNumber:number;
  currentPage:number;
  private _routParamSub:Subscription;
  constructor(
    private _productService : ProductsService,
    private _navRoute:Router,
    private _route: ActivatedRoute){ }

  ngOnInit(): void {

    this._routParamSub = this._route.queryParamMap.subscribe(queryParamMap => {
      if(queryParamMap.has('page')){
              console.log(queryParamMap.get('page'));
              this._productService.getProductsByPage(queryParamMap.get('page')).subscribe((res:any)=>{
                this.products = res.data;
                this.pageTotalNumber = res.total_pages;
                this.currentPage = Number(queryParamMap.get('page')) || 1;
                console.log("currentPage " + this.currentPage);
              })
            }else{
              this._routParamSub = this._productService.getProducts().subscribe((res:any) => {
              console.log(res.data);
              this.pageTotalNumber = res.total_pages;
              this.currentPage = Number(queryParamMap.get('page')) || 1;
              this.products = res.data;
            }
              )}   
   
    })
  }

  counter(i: number) {
    return new Array(i);
}

onClick(pageNumber:number):void{
  this._navRoute.navigate([''],{
    queryParams:{
      'page':pageNumber
    }
  })
}

}
