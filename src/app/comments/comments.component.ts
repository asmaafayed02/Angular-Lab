import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private router : Router) { }
    commentId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.commentId = params.get("id")
    })
  }
goBack(){
  this.router.navigate(['/posts',{id:this.commentId}])
}
}
