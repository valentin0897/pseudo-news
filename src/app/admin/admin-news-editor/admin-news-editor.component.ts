import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
// import { MAIN_NEWS } from 'src/app/mock-news';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './admin-news-editor.component.html',
})
export class AdminNewsEditorComponent implements OnInit {
  @ViewChild("inputFile") inputFile!: ElementRef
  newsItem$!: Observable<NewsItem>
  newsItem: NewsItem = new NewsItem(0, "", "", "", "", "", false, "", 0)
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
      this.newsItem = newsItem
      this.newsForm.controls["textNews"].setValue(newsItem.text)
    }})

  }

  setNewsValues(title: string, newsText: string): void {
    this.newsForm.controls["title"].setValue(title)
    this.newsForm.controls["textNews"].setValue(newsText)
  }

  changeImage(): void {
    this.inputFile.nativeElement.click()
  }

  changeNews(): void {
    let title = this.newsForm.controls["title"].value
    let textNews = this.newsForm.controls["textNews"].value

    // this.newsService.updateNews()
  }

}