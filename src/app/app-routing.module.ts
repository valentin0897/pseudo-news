import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNewsComponent } from './news/main-news/main-news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

const routes: Routes = [
  {path: '', component: MainNewsComponent},
  {path: 'news/:id', component: NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
