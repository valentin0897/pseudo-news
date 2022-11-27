import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TagItem } from '../models/tagItem';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }
  
  getTagById(tagId: number) {
    return this.http.get(environment.host + "/tag/" + tagId.toString())
  }

  getTagByName(tagName: string): Observable<TagItem>{
    return this.http.get(environment.host + "/tag/", {params: {tagName: tagName}}) as Observable<TagItem>
  }
}
