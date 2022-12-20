import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { faEdit, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-admin-news-constructor',
  templateUrl: './admin-news-constructor.component.html',
  host: {"class": "news-constructor-wrapper"}
})
export class AdminNewsConstructorComponent implements OnInit {
  mainNewsList$!: Observable<NewsItem[]>
  mainNewsList: NewsItem[] = []
  regularNewsList$!: Observable<NewsItem[]>
  regularNewsList: NewsItem[] = []
  faEdit = faEdit
  faTrash = faTrash
  faPlus = faPlus

  constructor(
    public newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mainNewsList$ = this.route.paramMap.pipe(
      switchMap(() =>{
        return this.newsService.getMainNews()
      })
    )

    this.mainNewsList$.subscribe(
      (newsItem: NewsItem[])=>{this.mainNewsList = newsItem}
    )

    this.regularNewsList$ = this.route.paramMap.pipe(
      switchMap(() => {
        return this.newsService.getRegularNews()
      })
    )

    this.regularNewsList$.subscribe(
      (newsItem: NewsItem[])=>{this.regularNewsList = newsItem}
    )
  }

  trackByFn(index: number, item: NewsItem){     
    return index; 
  }

  deleteNews(newsId: number){
    console.log(newsId)
    this.newsService.deleteNewsById(newsId).subscribe(
      {
        next: () => {
          this.regularNewsList = this.regularNewsList.filter((news: NewsItem) => {
          return news.id !== newsId
        })}
      }
    )
  }
}
