import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UtilsService } from './../../../shared/services/utils.service';
import { IntraService } from './../../../shared/services/intra.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Input() section: string = 'Institucional';
  news: any = [];
  json: any = [];
  book: any = [];
  menu: any = [];

  newsSubscription: Subscription;
  jsonSubscription: Subscription;
  bookSubscription: Subscription;
  menuSubscription: Subscription;

  constructor(
    private intra: IntraService,
    private util: UtilsService
  ) { }

  ngOnInit(): void {
    this.WidgetInit();  
    this.WidgetNews();
    this.WidgetMenu(this.section);
  }

  ngOnDestroy(): void {
    if (this.newsSubscription) { this.newsSubscription.unsubscribe(); }
    if (this.jsonSubscription) { this.jsonSubscription.unsubscribe(); }
    if (this.bookSubscription) { this.bookSubscription.unsubscribe(); }
    if (this.menuSubscription) { this.menuSubscription.unsubscribe(); }
  }

  WidgetNews() {
    this.newsSubscription = this.intra.getNews(5).subscribe(
      resp => (this.news = resp),
      erro => (console.log(erro))
    );
  }

  WidgetMenu(section: string) {
    let widgetMenu: any = [];
    this.jsonSubscription = this.util.GetJson('menu').subscribe(
      resp => {
        widgetMenu = resp[0].top.megaInstitucional;
        const filter = widgetMenu.filter(fill => {
          return fill.titulo == this.section;
        })
        this.menu = filter[0];
        console.log(filter);
      },
      erro => (console.log(erro))
    );
  }

  WidgetInit() {
    this.jsonSubscription = this.util.GetJson('database').subscribe(
      resp => (this.json = resp[0].sidebar),
      erro => (console.log(erro))
    );
  }
}
