import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food_items: any[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void { 
    this.foodService.getFoodsItems().subscribe((data : any[])=>{
      console.log(data);
      this.food_items = data;
  })
  }

}
