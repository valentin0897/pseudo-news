import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(file: File, newsId: string): Observable<any> {
    let formData = new FormData()
    formData.append("file", file)
    formData.append("news_id", newsId)
    return this.http.post(environment.host + "/upload/", formData) as Observable<any>
  }
}
