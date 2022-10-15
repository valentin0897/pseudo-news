import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MainNewsComponent } from './main-news/main-news.component';

const routes: Routes = [
  {path: '', component: NewsLayoutComponent, 
   children: [
    {path: 'news/:id', component: NewsDetailsComponent},
    {path: '', pathMatch: 'full', component: MainNewsComponent},
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
