import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNewsConstructorComponent } from './admin-news-constructor/admin-news-constructor.component';
import { AdminNewsEditorComponent } from './admin-news-editor/admin-news-editor.component';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: 'admin',
    component: AdminPanelComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo:'news-constructor' },
      {path: 'news-constructor', component: AdminNewsConstructorComponent},
      {path: 'news-editor/:id', component: AdminNewsEditorComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
