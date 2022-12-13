import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { TagItem } from 'src/app/models/tagItem';
import { NewsService } from 'src/app/services/news.service';
import { TagsService } from 'src/app/services/tags.service';
import { isSmallNews } from 'src/app/utilities/utility';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
})
export class MainNewsComponent implements OnInit {
  newsList$!: Observable<NewsItem[]>
  newsList: NewsItem[] = []

  activeTag: string = ""
  title: string = "Main news"
  secondaryNewsList: NewsItem[] = []

  isSmallNews = isSmallNews
  numberSmallNews = 8
  numberMediumNews = 4

  constructor(public newsService: NewsService,
              public tagService: TagsService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.activeTag = params["tag"])

    this.newsList$ = this.route.paramMap.pipe(
      switchMap(() =>{
        return this.newsService.getMainNews()
        
      })
    )

    this.newsList$.subscribe(
      (newsItem: NewsItem[])=>{this.newsList = newsItem}
    )


    this.onScroll() // Only for mocking
  }

  onScroll() {
    this.newsService.getRegularNews().subscribe(
      (news) => {for (let newsItem of news) this.secondaryNewsList.push(newsItem)}
    )
  }
}
