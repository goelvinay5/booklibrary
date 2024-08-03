import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightsRoutingModule } from './flights.routing.module';
@NgModule({
  imports: [
    CommonModule,
    FlightsRoutingModule
  ],
  declarations: [
    FlightsComponent
  ]
})
export class FlightsModule { }