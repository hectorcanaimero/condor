import { Subscription } from 'rxjs';
import { IntraService } from './../../../shared/services/intra.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.scss']
})

export class InstitucionalComponent implements OnInit, OnDestroy {

  Id: any = [];
  post: any = [];
  midia: any = [];

  postSubscription: Subscription;
  midiaSubscription: Subscription;
  navigationSubscription: Subscription;

  constructor(
    private intra: IntraService,
    private activate: ActivatedRoute,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }

  ngOnInit(): void {
    this.Id = this.activate.snapshot.paramMap.get('id');
    this.postSubscription = this.intra.getPageSlug(this.Id).subscribe(
      resp => {
        this.post = resp[0];
        this.getMidia(this.post.featured_media);
      },
      erro => (console.log(erro))
    );
  }

  ngOnDestroy(): void {
    if(this.postSubscription) { this.postSubscription.unsubscribe(); }
    if(this.midiaSubscription) { this.midiaSubscription.unsubscribe(); }
    if(this.navigationSubscription) { this.navigationSubscription.unsubscribe(); }
  }

  getMidia(id: number) {
    this.midiaSubscription = this.intra.getImage(id).subscribe(
      data => (this.midia = data['media_details']['sizes']['full'].source_url),
      erro => (this.midia = './assets/images/sem-imagem.jpg')
    );
  }
}
