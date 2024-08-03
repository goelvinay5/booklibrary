import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../core/store.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private store: StoreService){}

  ngOnInit(){
    console.log('Old Data',this.store.getStoreData());
    this.store.updateUser(
      {
        name: 'FlightFeature',
        age: 40
      }
    );
    console.log(this.store.getStoreData());
  }

}