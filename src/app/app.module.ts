import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainNewsComponent } from './news/main-news/main-news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNewsComponent,
    NewsItemComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
