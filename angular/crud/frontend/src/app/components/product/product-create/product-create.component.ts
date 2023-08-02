import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: 0
  }

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
  
  }

  popBack(): void {
    this.router.navigate(['/products'])
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Product added")
      this.router.navigate(['/products'])
    })
  }
}
