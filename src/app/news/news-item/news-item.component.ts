import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from 'src/app/models/newsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  host: {'class': 'news-item-wrapper'}
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsItem = new NewsItem(0, "", "", "", "", "", false, "", 0)

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.newsItem)
  }

  handleClick(): void {
    if (this.newsItem.is_external_link) {
      window.location.href = this.newsItem.external_link;
    } else {
      this.router.navigate([`${'/news'}/${this.newsItem.id}`]);
    }
  }

}
