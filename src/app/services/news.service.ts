import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { NewsItem } from '../models/newsItem';
import { TagItem } from '../models/tagItem';


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

  getTagsByNewsId(id: number): Observable<TagItem[]> {
    return this.http.get(environment.host + "/news/" + id.toString() + "/tags/") as Observable<TagItem[]>
  } 

  updateNewsById(id: number, body: any): Observable<NewsItem> {
    return this.http.patch(environment.host + "/news/" + id.toString(), body) as Observable<NewsItem>
  }

  deleteNewsById(id: number) {
    return this.http.delete(environment.host + "/news/" + id.toString())
  }

  addLink(body: any) {
    return this.http.post(environment.host + "/news/add_link/", body) as Observable<any>
  }

  deleteLink(body: any) {
    return this.http.post(environment.host + "/news/delete_link/", body) as Observable<any>
  }
}
