import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { TagItem } from 'src/app/models/tagItem';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  host: {'class': 'news-details-wrapper'}
})
export class NewsDetailsComponent implements OnInit {
  @ViewChild("textWrapper") textWrapper!: ElementRef

  mainNewsItem$!: Observable<NewsItem>
  mainNewsItem: NewsItem = new NewsItem()
  mainNewsTags: TagItem[] = []

  //_news-item-component.sass
  newsItemHeight = 120
  coverHeight = 320
  amountOfNewsInRightColumn = 1

  newsList: NewsItem[] = []

  rightColumnNewsList: NewsItem[] = []
  secondaryNewsList: NewsItem[] = []

  constructor(private route: ActivatedRoute,
              public newsService: NewsService) { }

  ngOnInit(): void {
    // get mainNewsItem after changing route
    this.mainNewsItem$ = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return this.newsService.getNewsById(parseInt(params.get('id')!))
      })
    )

    this.mainNewsItem$.subscribe({
      next: (newsItem: NewsItem) => {
        this.mainNewsItem = newsItem
        
        this.getTagsOfMainNews(newsItem.id)
        this.injectHTML(this.mainNewsItem.text)
        this.setAmountOfNewsInRightColumn()

        if (this.amountOfNewsInRightColumn + 12 > this.newsList.length) {
          this.newsService.getAllNews().subscribe({
            next: (newsItems: NewsItem[]) => {
              for (let newsItem of newsItems) {
                this.insertInNewsList(newsItem)
              }
            }
          })
        }

        this.onScroll()
      }
    })
  }

  insertInNewsList(newsItem: NewsItem): void {
    if (!(this.newsList.filter((news: NewsItem) => news.id === newsItem.id).length > 0) && newsItem.id != this.mainNewsItem.id) {
      this.newsList.push(newsItem)
    } 
  }

  getNewsWithTags(tagItems: TagItem[]): any{
    for (const tagItem of tagItems) {
      this.newsService.getNewsByTagId(tagItem.id).subscribe({
        next: (newsItems: NewsItem[]) => {
          for (const newsItem of newsItems) {
            this.insertInNewsList(newsItem)
          }
        }
      })
    }
  }

  getTagsOfMainNews(newsId: number) {
    this.newsService.getTagsByNewsId(newsId).subscribe({
      next: (tagItems: TagItem[]) => {
        this.mainNewsTags = tagItems
        this.getNewsWithTags(tagItems)
      }
    }) 
  }

  setAmountOfNewsInRightColumn(): void {
    let offsetHeightOfTextWrapper = this.textWrapper.nativeElement.offsetHeight

    this.amountOfNewsInRightColumn = Math.floor((offsetHeightOfTextWrapper + this.coverHeight)/ this.newsItemHeight)
  }

  resetRightColumn(){
    this.rightColumnNewsList = []
  }

  injectHTML(html: string) {
    this.textWrapper.nativeElement.innerHTML = html
  }

  updateFeed() {
    this.newsList.push(...this.newsList) //TODO make showedNews counter 
  }

  onScroll() {
    this.updateFeed()
  }
}
