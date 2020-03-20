import { Injectable } from '@angular/core';
import { Post } from '../interfaces/blog/post';
import { Media } from '../interfaces/blog/media';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const url: string = environment.conteudo.blog;

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  /**
   * Midia
   */
  getImage(id: number): Observable<Media[]> {
    return this.http
      .get<Media[]>(`${ url }/media/${id}`, {
        headers: { Authorization: 'Basic Y29uZG9yOmFkbWluMTIzIUAj' }
      })
      .pipe(tap(data => data)).pipe(take(1));
  }

  /**
   * News
   */
  getPosts(limit: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${ url }/posts`, { params: { per_page: `${limit}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getPostId(id: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${ url }/posts/${id}`)
      .pipe(tap(data => data)).pipe(take(1));
  }

  getPostSlug(slug: string): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${ url }/posts`, { params: { slug } })
      .pipe(tap(data => data)).pipe(take(1));
  }
}
