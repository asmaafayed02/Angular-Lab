import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService,private router: Router,private activatedRoute : ActivatedRoute) { }
  posts:any ;
  error:any ;
  postId:any;
  goToComment(post:any){
    this.router.navigate(['/comment',post.id])
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data
    },err=>{this.error= err}
    )
    this.activatedRoute.paramMap.subscribe(params => {
      this.postId= params.get('id')
    })
  }
 
  isSelected(post:any)
  {
    return  parseInt(post.id)===parseInt(this.postId);
  }
}
