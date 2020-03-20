import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

const url: string = environment.mkt.url;
const token: string = `&access_token=${environment.mkt.token}`;
const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private Query<T>(query: string) {
    const sql: string = url + query + token;
    return this.http.get<T>(sql)
    .pipe(tap(data => data)).pipe(take(1));
  }

  Find(collection: string): Observable<any[]> {
    return this.Query<any[]>(collection);
  }

  Insert(table: string, data: any): Observable<any[]> {
    return this.http.post<any[]>(`${url}/${table}`, data, { headers });
  }

  Update(table: string, id: string, data: any): Observable<any[]> {
    return this.http.put<any[]>(`${url}/${table}/${id}`, data, { headers });
  }

  Delete(table: string, id: string): Observable<any[]> {
    return this.http.delete<any[]>(`${url}/${table}/${id}`, { headers });
  }
}
