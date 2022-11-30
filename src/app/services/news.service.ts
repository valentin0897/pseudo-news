import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { NewsItem } from '../models/newsItem';


@Injectable({
  providedIn: 'root'
})
export class NewsService {  

  constructor(private http: HttpClient) { }

  getMainNews(): Observable<NewsItem[]> {
    return this.http.get(environment.host + "/news/main/") as Observable<NewsItem[]>
  }

  getRegularNews(): Observable<NewsItem[]> {
    return this.http.get(environment.host + "/news/regular/") as Observable<NewsItem[]>
  }

  getNewsById(id: number): Observable<NewsItem> {
    return this.http.get(environment.host + "/news/" + id.toString()) as Observable<NewsItem>
  }

  updateNewsById(id: number, body: any): Observable<NewsItem> {
    return this.http.patch(environment.host + "/news/" + id.toString(), body) as Observable<NewsItem>
  }

  deleteNewsById(id: number) {
    return this.http.delete(environment.host + "/news/" + id.toString())
  }
}
