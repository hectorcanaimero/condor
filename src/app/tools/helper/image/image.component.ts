import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntraService } from '../../../shared/services/intra.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnDestroy {

  @Input() post: any = [];
  @Input() size?: string;
  imagem: any = [];
  default = `https://via.placeholder.com/${this.size}?text=Rede+Condor`;
  private imageSubscription: Subscription;

  constructor(private news: IntraService) { }

  ngOnInit() {
    this.imageSubscription = this.news.getImage(this.post.featured_media).subscribe(data => {
      this.imagem = data['media_details']['sizes']['full']['source_url'];
    }, err => console.log(err));
  }


  ngOnDestroy(): void {
    if (this.imageSubscription) { this.imageSubscription.unsubscribe(); }
  }

}
