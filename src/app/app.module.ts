import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainNewsComponent } from './news/main-news/main-news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import { NewsLayoutComponent } from './news/news-layout/news-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNewsComponent,
    NewsItemComponent,
    NewsDetailsComponent,
    PageNotFoundComponent,
    NewsLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
