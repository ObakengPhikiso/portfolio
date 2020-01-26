import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatTableDataSource } from '@angular/material';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: any;
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'message', 'action'];
  dataSource: any;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.messages = this.firebaseService.allMessages;
    this.dataSource = new MatTableDataSource(this.messages);
  }

 async onDelete(id: string) {
  await this.firebaseService.deleteMessage(id);
  }
 async onReply(email: EmailValidator) {
   return '';
 }

}
