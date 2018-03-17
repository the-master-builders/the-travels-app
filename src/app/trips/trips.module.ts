import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips/trips.component';

@NgModule({
  imports: [
    CommonModule,
    TripsRoutingModule
  ],
  declarations: [TripsComponent]
})
export class TripsModule { }
