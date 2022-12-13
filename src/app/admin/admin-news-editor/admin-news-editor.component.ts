import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable, switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/newsItem';
import { NewsService } from 'src/app/services/news.service';
import { ImageService } from 'src/app/services/image.service';
import { editorConfig } from 'src/app/configs/editor';
import { TagItem } from 'src/app/models/tagItem';

@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './admin-news-editor.component.html',
  host: {class: "news-editor-wrapper"}
})
export class AdminNewsEditorComponent implements OnInit {
  @ViewChild("inputFile") inputFile!: ElementRef
  
  selectedFile!: File

  newsItem$!: Observable<NewsItem>
  newsItem: NewsItem = new NewsItem()

  tags$!: Observable<TagItem[]>
  tags: TagItem[] = []

  newsForm!: FormGroup

  editorConfig: AngularEditorConfig = editorConfig

  minPubTime: number = 1
  maxPubTime: number = 48

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              public newsService: NewsService,
              public imageService: ImageService) {}

  ngOnInit(): void {
    this.newsItem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.newsService.getNewsById(parseInt(params.get('id')!))
      })
    )

    this.newsForm = this.fb.group({
      title: '',
      text: '',
      image: '',
      pub_time: '',
      short_description: '',
      external_link: '',
      tags: ''
    })
 
    this.newsItem$.subscribe({next:(newsItem: NewsItem)=>{
      this.newsItem = newsItem
      this.newsForm.controls["title"].setValue(newsItem.title)
      this.newsForm.controls["text"].setValue(newsItem.text)
      this.newsForm.controls["pub_time"].setValue(parseInt(newsItem.pub_time))
      this.newsForm.controls["short_description"].setValue(newsItem.short_description)
      this.newsForm.controls["external_link"].setValue(newsItem.external_link)
      this.newsService.getTagsByNewsId(this.newsItem.id).subscribe({
        next: (tagItems: TagItem[]) => {
          this.tags = tagItems
          let tags = ""
          for (let tagItem of tagItems) {
            tags += tagItem.tag + " " 
          }
          tags = tags.trimEnd()
          this.newsForm.controls["tags"].setValue(tags)
        }
      })
    }})
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

  getPubTime(pubTime: number | null): string {
    if (pubTime !== null) {
      let result = pubTime.toString()
      return result == "1" ? pubTime + " hour ago" : pubTime + " hours ago" 
    } else {
      return this.getPubTime(Math.floor(Math.random() * ((this.maxPubTime) - this.minPubTime) + this.minPubTime))
    }
  }

  isContainTag(target: TagItem, tagsItems: TagItem[]) {
    for(let tagItem of tagsItems) {
      if (tagItem.tag == target.tag) {
        return true
      }
    }
    return false
  }

  createTags(tagItems: TagItem[]) {
    for (let tagItem of tagItems) {
      let body = {"news_id": this.newsItem.id, "tag": tagItem.tag.toLowerCase()}
      this.newsService.addLink(body).subscribe({
        next: (value) => {}
      })
    }
  }

  deleteTags(tagItems: TagItem[]) {
    for (let tagItem of tagItems) {
      let body = {"news_id": this.newsItem.id, "tag": tagItem.tag.toLowerCase()}
      this.newsService.deleteLink(body).subscribe({
        next: (value) => {}
      })
    }
  }

  changeNews(): void {
    let title = this.newsForm.controls["title"].value
    let text = this.newsForm.controls["text"].value
    let pubTime = this.getPubTime(this.newsForm.controls["pub_time"].value)
    let shortDescription = this.newsForm.controls["short_description"].value
    let outerLink = this.newsForm.controls["external_link"].value
    let isOuterLink = outerLink == null ? false : true
    let tags: string[] = this.newsForm.controls["tags"].value.split(" ")

    let tagsItems: TagItem[] = []
    tags.forEach((tag: string) => {tagsItems.push(new TagItem(0, tag))})

    let tagsForCreation: TagItem[] = []
    let tagsForDeletion: TagItem[] = []

    if (tagsItems.length != 0) {
      tagsForCreation = tagsItems.filter((tagItem: TagItem) => {return !this.isContainTag(tagItem, this.tags)})
      tagsForDeletion = this.tags.filter((tagItem: TagItem) => {return !this.isContainTag(tagItem, tagsItems)})
    }

    this.createTags(tagsForCreation)
    this.deleteTags(tagsForDeletion)

    console.log("tagsForCreation"," ",tagsForCreation)
    console.log("tagsForDeletion"," ",tagsForDeletion)


    let body = {
      "title": title,
      "text": text,
      "pub_time": pubTime,
      "short_description": shortDescription,
      "is_external_link": isOuterLink,
      "external_link": outerLink
    }

    this.newsService.updateNewsById(this.newsItem.id, body).subscribe({
      next: (newsItem: NewsItem) => {console.log("News Changed")}
    })
  }

}
