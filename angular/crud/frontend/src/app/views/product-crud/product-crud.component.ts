import { HeaderService } from './../../components/template/header/header.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: "Cadastro de produtos",
      icon: "shopping_cart",
      routeURL: '/products'
    }
  }

  navigateToProductCreate() {
    this.router.navigate(['/products/create'])
  }
}
