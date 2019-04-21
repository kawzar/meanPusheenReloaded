import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './songs/songs.component';
import { DocumentService } from './songs.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from './search-filter.pipe'
import { FormsModule } from '@angular/forms';
import { DocumentViewComponent } from './song-view/song-view.component';


const ROUTES = [
  {
    path: '',
    redirectTo: 'documents',
    pathMatch: 'full'
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'documents/document-details/:id',
    component: DocumentViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    SearchFilterPipe,
    DocumentViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }