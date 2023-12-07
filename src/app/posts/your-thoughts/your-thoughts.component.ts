import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog';
import { ImageDisplayComponent } from 'src/app/image-display/image-display.component';
 
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
  constructor(private http:HttpClient, public dialog: MatDialog){}

  
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

openPopup(): void {
  const dialogRef = this.dialog.open(ImageDisplayComponent, {
    width: '250px', // Set the width of the pop-up
  });

  // You can subscribe to the afterClosed event to get data when the pop-up is closed
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
