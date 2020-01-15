import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { About } from './about';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private readonly notification: NotificationService, private readonly fireStore: AngularFirestore) { }

  messageForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

ngOnInit() {
}

async submit(form: FormGroup) {
  if (form.valid) {
    await this.fireStore.collection('messages').add(form.value).then(() => {
      this.notification.success(`Thanks ${form.value.firstname} for getting in contact with me, you'll get my response in no time`);
    }).catch(err => {
      this.notification.danger(err.message);
    });
  }
}
}
