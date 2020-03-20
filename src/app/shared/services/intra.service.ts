import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Page } from '../interfaces/intra/page';
import { Tabloide } from '../interfaces/intra/tabloide';
import { Banner } from '../interfaces/intra/banner';
import { Media } from '../interfaces/intra/media';
import { Post } from '../interfaces/intra/post';
import { Loja } from '../interfaces/intra/loja';


const url: string = environment.conteudo.news;

@Injectable({
  providedIn: 'root'
})
export class IntraService {

  constructor(private http: HttpClient) { }

  /**
   * Page
   */

  getPageId(id: number): Observable<Page[]> {
    return this.http
      .get<Page[]>(`${ url }/pages/${id}`, { params: { per_page: '1' } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getPageSlug(slug: string): Observable<Page[]> {
    return this.http
      .get<Page[]>(`${ url }/pages`, {params: { slug: `${slug}` }})
      .pipe(tap(data => data)).pipe(take(1));
  }

  /**
   * Tabloide
   */
  getTabloide(limit: number): Observable<Tabloide[]> {
    return this.http
      .get<Tabloide[]>(`${ url }/tabloide`, { params: { per_page: `${limit}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getTabloideSlug(slug: string): Observable<Tabloide[]> {
    return this.http
      .get<Tabloide[]>(`${ url }/tabloide`, { params: { slug: `${slug}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getTabloideId(id: number): Observable<Tabloide[]> {
    return this.http
      .get<Tabloide[]>(`${ url }/tabloide/${id}`)
      .pipe(tap(data => data)).pipe(take(1));
  }

  /**
   * Banner
   */
  getBanner(position: string): Observable<Banner[]> {
    const sql = `${ url }/imagens`;
    return this.http
      .get<Banner[]>(sql, { params: { position } })
      .pipe(tap(data => data)).pipe(take(1));
  }

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
  getNews(limit: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${ url }/posts`, { params: { per_page: `${limit}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getNewId(id: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${ url }/posts/${id}`)
      .pipe(tap(data => data)).pipe(take(1));
  }

  getNewSlug(slug: string): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${ url }/posts`, { params: { slug } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  /**
   * Lojas
   */
  getLojas(limit: number): Observable<Loja[]> {
    return this.http
      .get<Loja[]>(`${ url }/loja`, { params: { per_page: `${limit}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getLojaSlug(slug: string): Observable<Loja[]> {
    return this.http
      .get<Loja[]>(`${ url }/loja`, { params: { slug: `${slug}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }

  getLojaId(id: number): Observable<Loja[]> {
    return this.http
      .get<Loja[]>(`${ url }/loja/${id}`)
      .pipe(tap(data => data)).pipe(take(1));
  }

  getLojaCode(id: any): Observable<Loja[]> {
    return this.http
      .get<Loja[]>(`${ url }/loja`, { params: { meta_key: 'cod_loja', meta_value: `${id}` } })
      .pipe(tap(data => data)).pipe(take(1));
  }
}
