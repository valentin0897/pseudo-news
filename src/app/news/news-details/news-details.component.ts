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
  mainNewsItem: NewsItem = new NewsItem(0, "", "", "", "", "")  
  mainNewsItem$!: Observable<NewsItem>
  newsTextSplitted: string[] = []

  numberSmallNews = 8
  numberMediumNews = 4
  isSmallNews = isSmallNews

  newsList: NewsItem[] = []
  secondaryNewsList: NewsItem[] = []

  constructor(private route: ActivatedRoute, public newsService: NewsService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    // this.mainNewsItem$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.getNewsById(params.get('id')!)
    //   })
    // )

    this.newsId = parseInt(id)
    this.getNewsById(this.newsId)
    this.getNews()
  }

  getNews() {
    this.newsService.getNews() 
      .subscribe((data: any) => {
        this.newsList = data["news"]
        this.getSecondaryNews()
      })
  }

  getNewsById(id: number) {
    this.newsService.getNews().subscribe((data: any) => {
      for (const news of data["news"] as NewsItem[]) {
        if (news.id == id){
          this.mainNewsItem = news
          this.newsTextSplitted = news.text.trim().split('.')
        }
      }
    })
  }

  getSecondaryNews() {
    this.secondaryNewsList.push(...this.newsList.slice(0, 4))
  }

  onScroll() {
    this.getSecondaryNews()
  }
}
