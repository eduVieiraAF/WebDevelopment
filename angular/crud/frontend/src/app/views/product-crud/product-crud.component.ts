import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent  {
  constructor(private router: Router) {}

  navigateToCreateProduct(): void {
    // alert("Going")
    this.router.navigate(['/products/create'])
  }
}
