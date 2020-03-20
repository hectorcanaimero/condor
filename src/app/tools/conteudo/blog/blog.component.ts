import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from '../../../shared/interfaces/mkt/site';
import { Post } from '../../../shared/interfaces/blog/post';
import { UtilsService } from '../../../shared/services/utils.service';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {


  json: any = [];
  blog: Post[];
  jsonSubscription: Subscription;
  blogSubscription: Subscription;

  constructor(
    private util: UtilsService,
    private blogger: BlogService
  ) { }

  ngOnInit(): void {
    this.jsonSubscription = this.util.GetJson('database').subscribe(
      resp => {
        this.json = resp[0].blog;
        this.getPosts(this.json.qtd);
      },
      erro => console.log(erro)
    );
  }

  ngOnDestroy(): void {
    if (this.jsonSubscription) { this.jsonSubscription.unsubscribe(); }
    if (this.blogSubscription) { this.blogSubscription.unsubscribe(); }
  }

  getPosts(limit: number = 0) {
    this.blogSubscription = this.blogger.getPosts(limit).subscribe(
      resp => (this.blog = resp),
      erro => console.log(erro)
    );
  }

}
