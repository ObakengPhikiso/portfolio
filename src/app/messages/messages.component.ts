import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatTableDataSource } from '@angular/material';
import { EmailValidator } from '@angular/forms';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: any;
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'message', 'action'];
  dataSource: any;
  constructor(private firebaseService: FirebaseService, private confirm: ConfirmDialogService, private nofication: NotificationService) { }

  ngOnInit() {
    this.messages = this.firebaseService.allMessages;
    this.dataSource = new MatTableDataSource(this.messages);
  }

 onDelete(id: string) {
   console.log(id);

   if (id) {
     this.confirm.openConfirmDialog('Are you sure you want to delete this record?').afterClosed().subscribe(res => {
       if (res) {
        this.firebaseService.deleteMessage(id).then(() => {
          this.ngOnInit();
        });
       }
     });
   } else {
     return this.nofication.success(`record doesn't exist or doesn't have a correct id`);
   }
  }
 async onReply(email: EmailValidator) {
   this.confirm.openConfirmDialog(`You are about to reply ${email}`);
 }

}
