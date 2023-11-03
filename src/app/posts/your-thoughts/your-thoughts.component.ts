import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
 
@Component({
  selector: 'app-your-thoughts',
  templateUrl: './your-thoughts.component.html',
  styleUrls: ['./your-thoughts.component.css']
})
export class YourThoughtsComponent {
  
  url='';
  posts=[];
  newPost:any ={name:'', imageUrl:'',postData:'',dateTime:''};
  postData: string = '';
  constructor(private http:HttpClient){}

  
getPosts() {
  this.http.get<any>('http://localhost:3000/posts').subscribe(response => {
    this.posts = response;
  });
}

onSubmit() {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  this.newPost.name ='Kabelo Axis';
  this.newPost.dateTime = new Date();
  this.http.post<any>('http://localhost:3000/posts', this.newPost, { headers }).subscribe(response => {
    this.getPosts(); // Refresh the posts after a new post is created
    this.newPost = { name:'', imageUrl:'',postData:'',timeDate: ''}; // Reset the new post object
  });
}
}
