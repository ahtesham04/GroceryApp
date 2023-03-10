import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryApiService {
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://apolis-grocery.herokuapp.com/api'
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/category`)
  }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/products`)
  }
  getSubCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/subcategory`)
  }
}
