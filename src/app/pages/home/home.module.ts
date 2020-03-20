import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolsModule } from '../../tools/tools.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ToolsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
