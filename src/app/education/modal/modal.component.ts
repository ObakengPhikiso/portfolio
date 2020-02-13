import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  message = 'Request for matric results and transcript';
  name;
  messageForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl(this.message, [Validators.required]),
  });
  constructor( private readonly firebaseService: FirebaseService) { }

  ngOnInit() {

  }
  sendMail(message: FormGroup) {
    const messageValue = message.value;
    if (message.valid) {
      // Send an email
      this.firebaseService.request(messageValue);
    }
  }
}
