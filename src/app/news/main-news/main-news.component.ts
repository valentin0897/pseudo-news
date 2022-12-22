import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
})
export class MainNewsComponent implements OnInit {
  mainNewsList$!: Observable<NewsItem[]>
  mainNewsList: NewsItem[] = []

  newsList: NewsItem[] = []

  activeTag: string = ""
  title: string = ""

  constructor(public newsService: NewsService,
              public tagService: TagsService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.activeTag = params["tag"])

    this.mainNewsList$ = this.route.paramMap.pipe(
      switchMap(() =>{
        return this.newsService.getMainNews()
      })
    )

    this.mainNewsList$.subscribe(
      (newsList: NewsItem[])=>{this.mainNewsList = newsList}
    )

    this.onScroll() // Only for mocking
  }

  updateFeed() {
    this.newsService.getRegularNews().subscribe(
      {
        next: (news: NewsItem[]) => {
          for (let newsItem of news) this.newsList.push(newsItem)
        }
      }
    )
  }

  onScroll() {
    this.updateFeed()
  }
}
