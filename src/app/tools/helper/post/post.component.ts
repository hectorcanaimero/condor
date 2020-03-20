import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BlogService } from '../../../shared/services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: any;
  imagem: any = [];
  private imageSubscription: Subscription;

  constructor(private wp: BlogService) { }

  ngOnInit(): void {
    this.imageSubscription = this.wp.getImage(this.post.featured_media).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.imagem = data['media_details']['sizes']['medium']['source_url'];
    });
  }


  ngOnDestroy(): void {
    if (this.imageSubscription) { this.imageSubscription.unsubscribe(); }
  }

}
