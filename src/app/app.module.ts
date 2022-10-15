import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    AdminModule,
    NewsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
