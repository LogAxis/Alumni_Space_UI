import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface PostInfo{
        user_name: string;
        user_postion: string;
        institution: string;
        user_image: string;
        post_time:string;
        text_message:string;
        image_message: string;
}

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {

  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get<any>('http://localhost:3000/posts').subscribe(response => {
      this.posts = response.reverse();
    });
  }

}
