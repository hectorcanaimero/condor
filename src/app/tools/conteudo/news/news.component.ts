import { Component, OnInit, OnDestroy } from '@angular/core';
import { IntraService } from '../../../shared/services/intra.service';
import { Page } from 'src/app/shared/interfaces/intra/page';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {


  json: any = [];
  pages: any = [{ id: 5 }, { id: 10 }, { id: 12 }, { id: 14 }];
  jsonSubscription: Subscription;

  constructor(
    private util: UtilsService
  ) { }

  ngOnInit(): void {
    this.jsonSubscription = this.util.GetJson('database').subscribe(
      resp => {
        this.json = resp[0].news;
      },
      erro => console.log(erro)
    );
  }

  ngOnDestroy(): void {
    if (this.jsonSubscription) { this.jsonSubscription.unsubscribe(); }
  }
}
