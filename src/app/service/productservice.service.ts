import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/prodcuct';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


  public API: string ="http://localhost:3000/product";
  constructor(
    private http: HttpClient
  ) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }
  addProduct(product: Product): Observable<Product>{
    return this.http.post(this.API, product);
}
deleteProduct(id: any): Observable<Product>{
  return this.http.delete(this.API+ "/" + id);

}
updateProduct(product: Product): Observable<Product>{
  return this.http.put(`${this.API}/${product.id}`, product);
}

getProductById(id: any): Observable<Product>{
  return this.http.get(this.API+ "/" + id);

}
}
