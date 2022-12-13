import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from 'src/app/models/newsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  host: {'class': 'news-item-wrapper'}
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsItem = new NewsItem()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    if (this.newsItem.is_external_link) {
      window.location.href = this.newsItem.external_link;
    } else {
      this.router.navigate([`${'/news'}/${this.newsItem.id}`])
      .then(() => {
        window.scroll({ 
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
      })
    }
  }

}
