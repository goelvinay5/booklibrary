import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }