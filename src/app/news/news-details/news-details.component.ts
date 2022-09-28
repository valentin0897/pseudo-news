import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  host: {'class': 'news-details'}
})
export class NewsDetailsComponent implements OnInit {
  newsId: number = 0
  newsItem: NewsItem = new NewsItem(0, "", "", "", "", "")  

  constructor(private route: ActivatedRoute, public newsService: NewsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.newsId = parseInt(id)
    this.getNewsById(this.newsId)
  }

  getNewsById(id: number) {
    this.newsService.getNews().subscribe((data: any) => {
      for (const news of data["news"] as NewsItem[]) {
        if (news.id == id){
          this.newsItem = news
        }
      }
    })
  }
}
