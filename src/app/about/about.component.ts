import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { About } from './about';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private readonly firebaseService: FirebaseService) { }

  messageForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

ngOnInit() {
}

 submit(form: FormGroup) {
  if (form.valid) {
     this.firebaseService.submit(form.value);
  }
}
}
