import { UtilsService } from 'src/app/shared/services/utils.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-menu-ofertas',
  templateUrl: './menu-ofertas.component.html',
  styleUrls: ['./menu-ofertas.component.scss']
})
export class MenuOfertasComponent implements OnInit {

  @Input() items: any = [];

  query: any = [];
  departamento: any = [];
  private querySubscription: Subscription;
  private menuSubscription: Subscription;

  constructor(
    private api: ApiService,
    private util: UtilsService
  ) {}

  ngOnInit() {
    this.querySubscription = this.util.GetJson('query').subscribe(
      resp => (this.getDepartament(
                                    resp[0].product.model,
                                    resp[0].product.menuDepartamento,
                                    `?${resp[0].ordem}nome%20ASC`)),
      erro => (console.log(erro))
    );
  }

  ngOnDestroy() {
    if (this.querySubscription) { this.querySubscription.unsubscribe(); }
    if (this.menuSubscription) { this.menuSubscription.unsubscribe(); }
  }

  getDepartament(model: string, query: string, collection: string) {
    this.menuSubscription = this.api.Find(model + query + collection).subscribe(
      resp => (this.departamento = resp),
      erro => (console.log(erro))
    );
  }

}
