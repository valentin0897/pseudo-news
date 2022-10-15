import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../shared/header/header.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNewsComponent,
    NewsItemComponent,
    NewsDetailsComponent,
    NewsLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
