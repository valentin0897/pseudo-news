import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { isSmallNews } from 'src/app/utilities/utility';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  host: {'class': 'news-details'}
})
export class NewsDetailsComponent implements OnInit {
  newsId: number = 0
  mainNewsItem$!: Observable<NewsItem> 
  newsTextSplitted: string[] = []

  numberSmallNews = 8
  numberMediumNews = 4
  isSmallNews = isSmallNews

  rightColumnNewsList: NewsItem[] = []
  secondaryNewsList: NewsItem[] = []

  constructor(private route: ActivatedRoute, public newsService: NewsService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!

    this.mainNewsItem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.newsService.getNewsById(parseInt(params.get('id')!))
      })
    )

    this.newsService.getMainNews().subscribe(
      (news) => {for (let newsItem of news) this.rightColumnNewsList.push(newsItem)}
    )
  }

  onScroll() {
    this.newsService.getNews().subscribe(
      (news) => {for (let newsItem of news) this.secondaryNewsList.push(newsItem)}
    )
  }
}
