import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { AboutComponent } from './views/about/about.component';
import { ReportComponent } from './views/report/report.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "report",
    component: ReportComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
