import { IntraComponent } from './intra.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: IntraComponent,
    children: [
      { 
        path: ':id', 
        loadChildren: () =>import ('./institucional/institucional.module')
          .then(i=>i.InstitucionalModule)
      },
      { 
        path: 'tabloide-online', 
        loadChildren: () =>import ('../ofertas/tabloide/tabloide.module')
          .then(i=>i.TabloideModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntraRoutingModule { }
