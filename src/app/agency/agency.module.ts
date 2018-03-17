import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency/agency.component';

@NgModule({
  imports: [
    CommonModule,
    AgencyRoutingModule
  ],
  declarations: [AgencyComponent]
})
export class AgencyModule { }
