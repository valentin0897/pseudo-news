import { Injectable } from '@angular/core';

import { Observable, of, map, zip } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/newsItem';
// import { MAIN_NEWS } from '../mock-news';
import { environment } from 'src/environments/environment';

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
}
