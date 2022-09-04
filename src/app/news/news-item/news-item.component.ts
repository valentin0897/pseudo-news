import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from 'src/app/models/newsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  host: {'class': 'news-item-wrapper'}
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsItem = new NewsItem("","","","")

  constructor() { }

  ngOnInit(): void {
  }

}
