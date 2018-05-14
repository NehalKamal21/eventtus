import { Service } from './../../services/apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any=[];
  p: number = 1;
  constructor(public service: Service) {
    this.service.getPosts().then(res=>{
      this.posts = res;
    })
   }

  ngOnInit() {
  }

}
