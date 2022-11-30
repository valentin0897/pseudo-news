import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SettingsItem } from 'src/app/models/settingsItem';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-admin-news-settings',
  templateUrl: './admin-news-settings.component.html',
  host: {"class": "admin-news-settings-wrapper"}
})
export class AdminNewsSettingsComponent implements OnInit {
  settingsForm!: FormGroup
  settingsItem: SettingsItem = new SettingsItem(0, "", false)
  settingsItem$!: Observable<SettingsItem>

  constructor(
    private route: ActivatedRoute,
    public settingsService: SettingsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {


    this.settingsForm = this.fb.group({
      headerTitle: ''
    })

    this.settingsService.getActiveSettings().subscribe({next: (settingsItem: SettingsItem) => {
      this.settingsItem = settingsItem
      this.settingsForm.controls["headerTitle"].setValue(settingsItem.header_title)
    }})
  }

  changeSettings() {
    let headerTitle = this.settingsForm.controls["headerTitle"].value
    let body = {
      "header_title": headerTitle,
      "is_active": true
    }
    this.settingsService.setActiveSettings(this.settingsItem.id, body).subscribe({
      next: (settingsItem: SettingsItem) => {console.log("Settings changed")}
    })
  }

}
