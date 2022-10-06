import { Injectable } from '@angular/core';

import { Observable, of, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/newsItem';
import { NEWS } from '../mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {  

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsItem[]> {
   return of(NEWS) 
  }

  getNewsById(id: number): Observable<NewsItem> {
    return this.getNews().pipe(
      map((news: NewsItem[]) => news.find(newsItem => newsItem.id === id)!)
    )
  }
}
