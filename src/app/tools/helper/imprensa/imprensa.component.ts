import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntraService } from '../../../shared/services/intra.service';

@Component({
  selector: 'app-imprensa',
  templateUrl: './imprensa.component.html',
  styleUrls: ['./imprensa.component.scss']
})
export class ImprensaComponent implements OnInit, OnDestroy {

  @Input() items: number;
  item: any = [];
  imagem: string;

  private imageSubscription: Subscription;
  private pageSubscription: Subscription;

  constructor(private intra: IntraService) {}
  ngOnInit() {
    this.getPage(this.items);
  }

  ngOnDestroy() {
    if (this.imageSubscription) { this.imageSubscription.unsubscribe(); }
    if (this.pageSubscription) { this.pageSubscription.unsubscribe(); }
  }

  getPage(id: number) {
    this.pageSubscription = this.intra.getPageId(id).subscribe(data => {
      this.item = data;
      this.getImage(this.item.featured_media);
    });
  }

  getImage(id: number) {
    this.imageSubscription = this.intra.getImage(id).subscribe(data => {
      this.imagem = data['media_details']['sizes']['medium']['source_url'];
    });
  }

}
