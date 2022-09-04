import { Component, OnInit } from '@angular/core';
import { NewsItem } from 'src/app/models/newsItem';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
})
export class MainNewsComponent implements OnInit {
  title: string = ""
  newsList: NewsItem[] = [
  new NewsItem("Очень важная новость 1", "https://placehold.jp/3d4070/ffffff/500x281.png", "8 hours ago", ""), 
  new NewsItem("Очень важная новость 2", "https://placehold.jp/3d4070/ffffff/500x281.png", "14 hours ago", ""),
  new NewsItem("Очень важная новость 3", "https://placehold.jp/3d4070/ffffff/500x281.png", "15 hours ago", ""),
  new NewsItem("Очень важная новость 4", "https://placehold.jp/3d4070/ffffff/500x281.png", "9 hours ago", ""),
  new NewsItem("Очень важная новость 5", "https://placehold.jp/3d4070/ffffff/500x281.png", "13 hours ago", ""),
  new NewsItem("Очень важная новость 6", "https://placehold.jp/3d4070/ffffff/500x281.png", "3 hours ago", ""),
  new NewsItem("Очень важная новость 7", "https://placehold.jp/3d4070/ffffff/500x281.png", "11 hours ago", ""),

]

  constructor() { }

  ngOnInit(): void {
    this.title = "Main news"
  }

}
