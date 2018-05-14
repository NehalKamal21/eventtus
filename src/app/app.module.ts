import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule,MatListModule, 
  MatCardModule, MatInputModule,MatMenuModule} from '@angular/material';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { Service } from './services/apis.service';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewPostComponent } from './components/new-post/new-post.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FooterComponent,
    PostsComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
