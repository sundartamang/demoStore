import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  // get product list
  product_list_url = `${config.base_url}products?limit=`
  getProductList(limit) {
    return this._http.get(`${this.product_list_url}${limit}`)
  }
}
