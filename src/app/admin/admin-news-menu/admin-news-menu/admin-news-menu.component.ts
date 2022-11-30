import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-news-menu',
  templateUrl: './admin-news-menu.component.html',
  host: {"class": "admin-news-menu-wrapper"}
})
export class AdminNewsMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
