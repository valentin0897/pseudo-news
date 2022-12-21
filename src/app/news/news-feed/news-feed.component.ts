import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from 'src/app/models/newsItem';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  @Input() newsList: NewsItem[] = []

  numberSmallNews = 8
  numberMediumNews = 4

  constructor() { }

  ngOnInit(): void {
  }

  isSmallNews(index: number, numberMediumNews: number, numberSmallNews: number) {
    let pageNewsTotal = numberMediumNews + numberSmallNews

    if (index % pageNewsTotal < numberSmallNews){
      return true
    } 
    return false
  }
}
