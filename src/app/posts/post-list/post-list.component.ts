import { Component,OnDestroy,OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from "../post.model";
import { PostService } from "../posts.service";

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list-component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostService){ }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();

    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts:Post[]) =>{     // .subscribe is part of the rxjs library
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
      this.postsSub.unsubscribe();
  }

}

