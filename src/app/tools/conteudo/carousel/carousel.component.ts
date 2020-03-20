import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntraService } from '../../../shared/services/intra.service';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  itemsLeft: any = [];
  itemsRight: any = [];
  ofertas: any = [];

  private jsonSubscription: Subscription;
  private leftSubscription: Subscription;
  private rightSubscription: Subscription;

  constructor(
    private intra: IntraService,
    private util: UtilsService) { }

  ngOnInit() {
    this.getImageL();
    this.getImageR();
    this.getEletro();
  }

  ngOnDestroy() {
    if (this.leftSubscription) { this.leftSubscription.unsubscribe(); }
    if (this.rightSubscription) { this.rightSubscription.unsubscribe(); }
    if (this.jsonSubscription) { this.jsonSubscription.unsubscribe(); }
  }

  getImageL() {
    this.leftSubscription = this.intra.getBanner('top-left').subscribe(
      resp => (this.itemsLeft = resp),
      erro => (console.log(erro))
    );
  }

  getImageR() {
    this.rightSubscription = this.intra.getBanner('top-right').subscribe(
      resp => (this.itemsRight = resp),
      erro => (console.log(erro))
    );
  }

  getEletro() {
    this.jsonSubscription = this.util.GetJson('ofertas').subscribe(
      resp => (this.ofertas = resp[0]['eletro']),
      erro => (console.log(erro))
    );
  }

}
