import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient){}

  getproductlist(): Observable <any>{
    return this.http.get("https://fakestoreapi.com/products")

  }

  getpruductDetails( id: any): Observable <any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}` )

  }
}