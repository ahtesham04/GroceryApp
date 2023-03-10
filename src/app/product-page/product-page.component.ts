import { Component, OnInit } from '@angular/core';
import { GroceryApiService } from '../shared/service/grocery-api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private groceryService: GroceryApiService) { }
  allProductsData: any = [];
  allSubcategoryData: any = [];
  ngOnInit(): void {
    this.groceryService.getAllProducts().subscribe(res => {
      this.allProductsData = res.data;
    })
    this.groceryService.getSubCategories().subscribe(res => {
      this.allSubcategoryData = res.data;
    })
  }

}
