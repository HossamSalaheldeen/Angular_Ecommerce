import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common-functions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products : Product[];
  pageTotalNumber:number;
  currentPage:number;
  searchWord:string;

  loading_img: string = "/assets/images/loading.gif";

  private _routParamSub:Subscription;
  constructor(
    private _productService : ProductsService,
    private _navRoute:Router,
    private _route: ActivatedRoute,
    private _commonServices:CommonService)
    { }

    ngOnInit(): void {
      this._routParamSub = this._route.queryParamMap.subscribe(queryParamMap => {
      if(queryParamMap.has('page')){
              console.log(queryParamMap.get('page'));
              this._productService.getProductsByPage(queryParamMap.get('page'),queryParamMap.get('limit'),queryParamMap.get('q')).subscribe((res:any)=>{
                this.products = res.data;
                this.pageTotalNumber = res.total_pages;
                this.currentPage = Number(queryParamMap.get('page')) || 1;
                this.searchWord = queryParamMap.get('q');
                console.log("getProductsByPage " + queryParamMap.get('q'));
              })
            }else{
              this._productService.getProducts(12).subscribe((res: any) => {
                this.products = res.data;
                this.pageTotalNumber = res.total_pages;
                this.currentPage = Number(queryParamMap.get('page')) || 1;
                this._commonServices.clearStrimg();
                this.searchWord = 'Product Title'
                console.log("here");
              });
            }
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
