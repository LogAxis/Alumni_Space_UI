import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent {

  posts=[];
  newPost:any ={name:'', imageUrl:'',postData:'',dateTime:''};
  
  eventForm!: FormGroup;
  imageFile: File | null = null;
  showModal = false;
  events: any[] = [];
  currentDate: Date = new Date();
  

  constructor(private service: EventService, private fb: FormBuilder,private http:HttpClient) {
    this.eventForm = this.fb.group({
      eventTitle: [''],
      eventDescription: [''],
     
    });
    this.events = this.service.getEvents();
  }

  
  onPost() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const event:any = {
      title: this.eventForm.get('eventTitle')?.value,
      description: this.eventForm.get('eventDescription')?.value,
      image: this.imageFile,

    };
    this.http.post<any>('http://localhost:3000/posts',event,{headers}).subscribe(response =>{
    this.service.getEvents();
    this.service.addEvent(event);
    this.eventForm.reset();
    this.imageFile = null;
    this.showModal = true;
    })

  }

  closeModal() {
    this.showModal = false; // Close the modal
  }

   

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageFile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getPosts() {
    this.http.get<any>('http://localhost:3000/posts').subscribe(response => {
      this.posts = response;
    });
  }



 

  // Custom function to calculate time difference and return the "posted ... ago" message
  getTimeDifference(datePosted: Date): string {
    const timeDiff = this.currentDate.getTime() - new Date(datePosted).getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return ` ${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return ` ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return ` ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return ` a few seconds ago`;
    }
  }

  editEvent(index: number) {
    // Implement code to handle the "Edit" action for the selected event
    const selectedEvent = this.events[index];
    this.events.splice(index, 1);

    // You can open a modal or a form for editing the event details
    // For example, you can use a form to update event details
    this.eventForm.setValue({
      eventTitle: selectedEvent.title,
      eventDescription: selectedEvent.description,
    });
    this.imageFile = selectedEvent.image;

    // You may also set a flag or variable to indicate that you are in edit mode
    // For example: this.isEditMode = true;
  }

  deleteEvent(index: number) {
    // Implement code to handle the "Delete" action for the selected event
    this.events.splice(index, 1);
  }

 
}
 