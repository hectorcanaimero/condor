import { ToolsModule } from 'src/app/tools/tools.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionalRoutingModule } from './institucional-routing.module';
import { InstitucionalComponent } from './institucional.component';


@NgModule({
  declarations: [InstitucionalComponent],
  imports: [
    CommonModule,
    ToolsModule,
    InstitucionalRoutingModule
  ]
})
export class InstitucionalModule { }
