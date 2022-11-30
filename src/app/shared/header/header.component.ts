import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { SettingsItem } from 'src/app/models/settingsItem';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = ""

  constructor(public settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getActiveSettings().subscribe(
      {next: (settings: SettingsItem) => {this.title = settings.header_title}}
    )
  }
}
