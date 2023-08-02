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

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'dismiss', {
      duration: 4500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      politeness: "assertive",
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }
}
