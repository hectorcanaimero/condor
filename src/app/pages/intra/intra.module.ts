import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntraRoutingModule } from './intra-routing.module';
import { IntraComponent } from './intra.component';
import { ToolsModule } from 'src/app/tools/tools.module';


@NgModule({
  declarations: [IntraComponent],
  imports: [
    ToolsModule,
    CommonModule,
    IntraRoutingModule
  ]
})
export class IntraModule { }
