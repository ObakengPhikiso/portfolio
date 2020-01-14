import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { About } from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public readonly notification: NotificationService) { }

  messageForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

ngOnInit() {
}

submit(form: FormGroup) {
  if (form.valid) {
    this.notification.success(`Thanks ${form.value.firstname} for getting in contact with me, you'll get my response in no time`);
  } else {
    this.notification.danger(`Check all values are correct`);

  }
}
}
