import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offer_items: any[] = [];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffer().subscribe((data: any[])=>{
      console.log(data);
      this.offer_items = data;
    })
  }

}
