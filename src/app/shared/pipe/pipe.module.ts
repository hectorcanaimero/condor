import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { SafePipe } from './safe.pipe';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [FiltroPipe, SafePipe, TruncatePipe],
  exports: [FiltroPipe, SafePipe, TruncatePipe],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
