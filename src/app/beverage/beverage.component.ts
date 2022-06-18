import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../services/beverage.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  beverage_items: any[] = [];

  constructor(private beverageService: BeverageService) { }

  ngOnInit(): void {
    this.beverageService.getBeverage().subscribe((data: any[])=>{
      console.log(data);
      this.beverage_items = data;
    })
  }

}
