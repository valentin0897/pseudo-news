import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminNewsConstructorComponent } from './admin-news-constructor/admin-news-constructor.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminHeaderComponent,
    AdminNewsConstructorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
