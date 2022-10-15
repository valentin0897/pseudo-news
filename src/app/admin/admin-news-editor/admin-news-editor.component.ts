import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './admin-news-editor.component.html',
})
export class AdminNewsEditorComponent implements OnInit {
  newsItem$!: Observable<NewsItem>
  newsForm!: FormGroup

  constructor(private route: ActivatedRoute,
              public newsService: NewsService,
              private fb: FormBuilder) {
 }

  ngOnInit(): void {
    this.newsItem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.newsService.getNewsById(parseInt(params.get('id')!))
      })
    )

    this.newsForm = this.fb.group({
      title: '',
      textNews: '',
      image: '',
    })
 
    this.newsItem$.subscribe({next:(newsItem: NewsItem)=>{
      this.newsForm.controls["title"].setValue(newsItem.title)
      this.newsForm.controls["textNews"].setValue(newsItem.text)
    }})

  }

  setNewsValues(title: string, newsText: string): void {
    this.newsForm.controls["title"].setValue(title)
    this.newsForm.controls["textNews"].setValue(newsText)
  }



}
