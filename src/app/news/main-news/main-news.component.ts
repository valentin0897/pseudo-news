import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { isSmallNews } from 'src/app/utilities/utility';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
})
export class MainNewsComponent implements OnInit {
  activeTag: string = ""
  title: string = "Main news"
  newsList: NewsItem[] = []
  secondaryNewsList: NewsItem[] = []
  isSmallNews = isSmallNews

  numberSmallNews = 8
  numberMediumNews = 4

  constructor(public newsService: NewsService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.activeTag = params["tag"] ?? ""
    })

    this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.updateNews()
      }
    })

    this.getNews()
  }

  getNews() {
    this.newsService.getNews() 
      .subscribe((data: any) => {
        if (this.activeTag != ""){
          for (const news of data["news"] as NewsItem[]){
            if (news.tag == this.activeTag) {
              this.newsList.push(news)
            } 
          }
        } else {
        this.newsList = data["news"]
        }

        this.getSecondaryNews()
      })
  }

  updateNews() {
    this.newsList = []
    this.getNews()
  }

  getSecondaryNews() {
    this.secondaryNewsList.push(...this.newsList.slice(0, 4))
  }

  onScroll() {
    this.getSecondaryNews()
  }
}
