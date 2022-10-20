import { Injectable } from '@angular/core';

import { Observable, of, map, zip } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/newsItem';
import { MAIN_NEWS, NEWS } from '../mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {  

  constructor(private http: HttpClient) { }

  getMainNews(): Observable<NewsItem[]> {
    return of(MAIN_NEWS)
  }

  getNews(): Observable<NewsItem[]> {
   return of(NEWS) 
  }

  getNewsById(id: number): Observable<NewsItem> {
    let allNews = zip(this.getMainNews(), this.getNews()).pipe(map((x: any) =>x[0].concat(x[1]))) 
    return allNews.pipe(
      map((news: NewsItem[]) => news.find(newsItem => newsItem.id === id)!)
    )
  }
}