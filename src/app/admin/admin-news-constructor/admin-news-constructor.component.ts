import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-admin-news-constructor',
  templateUrl: './admin-news-constructor.component.html',
})
export class AdminNewsConstructorComponent implements OnInit {
  mainNewsList$!: Observable<NewsItem[]>

  constructor(
    public newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mainNewsList$ = this.route.paramMap.pipe(
      switchMap(() =>{
        return this.newsService.getMainNews()
      })
    )
  }

}
