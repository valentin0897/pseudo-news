import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainNewsComponent } from './news/main-news/main-news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNewsComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
