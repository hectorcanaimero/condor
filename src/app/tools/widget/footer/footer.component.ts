import { Component, OnInit, OnDestroy } from '@angular/core';
import { Footer } from 'src/app/shared/interfaces/mkt/site';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  json: any = [];
  jsonSubscription: Subscription;

  constructor(
    private util: UtilsService
  ) { }

  ngOnInit(): void {
    this.jsonSubscription = this.util.GetJson('database').subscribe(
      resp => {
        this.json = resp[0].footer;
      },
      erro => (console.log(erro))
    );
  }

  ngOnDestroy(): void {
    if (this.jsonSubscription) { this.jsonSubscription.unsubscribe(); }
  }

}
