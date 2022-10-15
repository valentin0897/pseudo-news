import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNewsComponent } from './news/main-news/main-news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsLayoutComponent } from './news/news-layout/news-layout.component';
import { PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
