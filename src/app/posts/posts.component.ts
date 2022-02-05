import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService) { }
  posts:any ;
  error:any ;

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data
    },err=>{this.error= err}
    )
  }

}
