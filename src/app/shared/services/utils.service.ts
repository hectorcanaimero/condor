import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UtilsService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) { }

  GetJson(json: string): Observable<any[]> {
    return this.http.get<any[]>(`./assets/json/${json}.json`).pipe(tap(data => data));
  }

  Chunk(arr: any, chunkSize: any) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  /**
   * Get CEP
   * @param cep Número do CEP
   */
  getCEP(cep: number) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    .pipe(tap(data => data)).pipe(take(1));
  }

  ToSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';

    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
    return str;
  }

  GetRandom(arr, n) {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) { throw new RangeError('getRandom: more elements taken than available'); }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  getStorage(Item: string) {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(Item));
    }
  }

  setStorage(key: string, data: any) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.setItem(key, JSON.stringify(data));
    }
  }

  delStorage(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.removeItem(key);
    }
  }
}
