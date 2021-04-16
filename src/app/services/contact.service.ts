import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http : HttpClient) { }

  SendMessage(msg) {
    return this._http.post(`${environment.baseUrl}/contact_us`, msg);
  }
}
