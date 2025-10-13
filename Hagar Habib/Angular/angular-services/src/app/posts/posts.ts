import { Component } from '@angular/core';
import { PostsService } from '../posts';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  posts: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }
}
