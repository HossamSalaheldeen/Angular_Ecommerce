
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getProducts(params?) {
    return this._http.get(`${environment.baseUrl}/products`,{params});
  }

  getProductsByPage(params?,limit?,q?){
    console.log("q : " + q);
    if(q != '' && q != null){
      return this._http.get(`${environment.baseUrl}/products?page=${params}&limit=${limit}&q=${q}`);
    }else{
      return this._http.get(`${environment.baseUrl}/products?page=${params}&limit=${limit}`);
    }
    
  }

  getProductById(id) {
    return this._http.get(`${environment.baseUrl}/products/${id}`);
  }
}
