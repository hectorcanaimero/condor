import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  json: any = [];
  jsonSubscription: Subscription;

  constructor(
    private util: UtilsService
  ) { }

  ngOnInit(): void {
    this.jsonSubscription = this.util.GetJson('menu').subscribe(
      resp => (this.json = resp[0]),
      erro => (console.log(erro))
    );
  }

  ngOnDestroy(): void {
    if (this.jsonSubscription) { this.jsonSubscription.unsubscribe(); }
  }

}
