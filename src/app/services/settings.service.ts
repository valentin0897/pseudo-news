import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SettingsItem } from '../models/settingsItem';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getActiveSettings(): Observable<SettingsItem> {
    return this.http.get(environment.host + "/settings/active/") as Observable<SettingsItem>
  }

  setActiveSettings(id: number, body: any): Observable<SettingsItem> {
    return this.http.patch(environment.host + "/settings/" + id.toString(), body) as Observable<SettingsItem>
  }
}
