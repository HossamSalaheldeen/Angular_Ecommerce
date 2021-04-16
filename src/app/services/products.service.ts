import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  getProducts() {
    return this._http.get(`${environment.baseUrl}/products`);
  }

  getProductsByPage(params?,limit?){
    return this._http.get(`${environment.baseUrl}/products?page=${params}&limit=${10}`);
  }
  getProductById(id) {
    return this._http.get(`${environment.baseUrl}/products/${id}`);
  }
}
