import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { isSmallNews } from 'src/app/utilities/utility';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  host: {'class': 'news-details-wrapper'}
})
export class NewsDetailsComponent implements OnInit {
  @ViewChild("textWrapper") textWrapper!: ElementRef

  mainNewsItem$!: Observable<NewsItem>
  mainNewsItem: NewsItem = new NewsItem()

  numberSmallNews = 8
  numberMediumNews = 4
  isSmallNews = isSmallNews

  //_news-item-component.sass
  newsItemHeight = 120
  minimumNewsItems = 3

  newsWithSameTag: NewsItem[] = []

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

    this.mainNewsItem$.subscribe({
      next: (newsItem: NewsItem) => {
        this.mainNewsItem = newsItem
        this.rightColumnNewsList = []

        this.injectHTML(this.mainNewsItem.text)
        
        let offsetHeight = this.textWrapper.nativeElement.offsetHeight
        let amountOfNews = Math.floor(offsetHeight / this.newsItemHeight) + this.minimumNewsItems

        this.newsService.getMainNews().subscribe(
          (news) => {for (let newsItem of news) {
            if (this.rightColumnNewsList.length >= amountOfNews){
              break
            } else {
              this.rightColumnNewsList.push(newsItem)}
            }
          }
        )
      }
    })


  }

  injectHTML(html: string) {
    this.textWrapper.nativeElement.innerHTML = html
  }

  onScroll() {
    this.newsService.getRegularNews().subscribe(
      (news) => {for (let newsItem of news) this.secondaryNewsList.push(newsItem)}
    )
  }
}
