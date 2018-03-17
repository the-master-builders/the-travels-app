import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationComponent } from './destinations/destination/destination.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  imports: [
    SharedModule,
    DestinationsRoutingModule
  ],
  declarations: [DestinationComponent, DestinationsComponent]
})
export class DestinationsModule { }
