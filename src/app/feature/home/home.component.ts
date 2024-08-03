import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../core/store.service';
@Component({
  selector: 'app-home',
  template: `
   home works
   <a routerLink="/flights">flights</a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(private store: StoreService){}
  ngOnInit(){
    console.log(this.store.getStoreData());
    this.store.updateUser({name: 'DominicFromHome', age: 2 });
    console.log(this.store.getStoreData());
  }

}