import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency/agency.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AgencyRoutingModule
  ],
  exports: [
    AgencyRoutingModule
  ],
  declarations: [AgencyComponent]
})
export class AgencyModule { }
