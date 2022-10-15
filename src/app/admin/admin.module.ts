import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminNewsConstructorComponent } from './admin-news-constructor/admin-news-constructor.component';
import { AdminNewsEditorComponent } from './admin-news-editor/admin-news-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminHeaderComponent,
    AdminNewsConstructorComponent,
    AdminNewsEditorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
