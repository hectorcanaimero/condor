import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabloideRoutingModule } from './tabloide-routing.module';
import { TabloideComponent } from './tabloide.component';


@NgModule({
  declarations: [TabloideComponent],
  imports: [
    CommonModule,
    TabloideRoutingModule
  ]
})
export class TabloideModule { }
