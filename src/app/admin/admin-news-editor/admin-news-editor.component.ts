import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { ImageUpload } from 'src/app/models/imageUpload';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './admin-news-editor.component.html',
  host: {class: "news-editor-wrapper"}
})
export class AdminNewsEditorComponent implements OnInit {
  selectedFile!: File
  @ViewChild("inputFile") inputFile!: ElementRef
  newsItem$!: Observable<NewsItem>
  newsItem: NewsItem = new NewsItem(0, "", "", "", "", "", false, "", 0)
  newsForm!: FormGroup
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Text news...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
  }


  constructor(private route: ActivatedRoute,
              public newsService: NewsService,
              public imageService: ImageService,
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

  replaceImage(imagePath: string): void {
    this.newsItem.img_url = imagePath
  }

  processImage(inputFile: any): void {
    this.selectedFile = inputFile.files[0]
    this.imageService.uploadImage(this.selectedFile, this.newsItem.id.toString()).subscribe({
      next: (file: any) => {
        this.replaceImage(file.file)
      }
    })
  }

  changeNews(): void {
    let title = this.newsForm.controls["title"].value
    let textNews = this.newsForm.controls["textNews"].value
    let body = {
      "title": title
    }


    this.newsService.updateNewsById(this.newsItem.id, body).subscribe({
      next: (newsItem: NewsItem) => {console.log("News Changed")}
    })
  }

}
