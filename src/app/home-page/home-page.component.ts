import { GroceryApiService } from './../shared/service/grocery-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productCategoryData: any = [];
  constructor(private groceryService: GroceryApiService) { }

  ngOnInit(): void {
    this.groceryService.getCategories().subscribe(res => {
      this.productCategoryData = res.data;
      console.log(this.productCategoryData)
    })
  }

}
