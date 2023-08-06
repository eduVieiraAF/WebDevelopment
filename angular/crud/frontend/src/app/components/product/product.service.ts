import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:3001/products'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3500,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }

  readById(id: string): Observable<Product> {
    const fetchedId = `${this.baseURL}/${id}`
    return this.http.get<Product>(fetchedId)
  }

  update(product: Product): Observable<Product> {
    const fetchedId = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(fetchedId, product)
  }

  delete() {

  }
}
