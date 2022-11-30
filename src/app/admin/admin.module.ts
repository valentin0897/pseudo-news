import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminNewsConstructorComponent } from './admin-news-constructor/admin-news-constructor.component';
import { AdminNewsEditorComponent } from './admin-news-editor/admin-news-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { NewsModule } from '../news/news.module';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminNewsMenuComponent } from './admin-news-menu/admin-news-menu/admin-news-menu.component';
import { AdminNewsSettingsComponent } from './admin-news-settings/admin-news-settings/admin-news-settings.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminHeaderComponent,
    AdminNewsConstructorComponent,
    AdminNewsEditorComponent,
    AdminNewsMenuComponent,
    AdminNewsSettingsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NewsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
