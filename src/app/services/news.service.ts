import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../models/newsItem';

@Injectable({
  providedIn: 'root'
})
export class NewsService {  

  constructor(private http: HttpClient) { }
  newsUrl = 'assets/database.json'

  newsList: NewsItem[] = []
  secondaryNewsList: NewsItem[] = []

  getNews() {
   return this.http.get<NewsItem[]>(this.newsUrl) 
  }

  getNewsById() {
    // TODO create method when db will be created
  }
}
