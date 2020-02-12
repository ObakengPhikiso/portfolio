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
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  async submit(form: FormGroup) {
    const fname = `${form.value.firstname} ${form.value.lastname}`;
    console.log(fname);
    // update the form name value
    form.patchValue({ name: fname });
    console.log(form.value);

    if (form.valid && fname) {
      this.firebaseService.submit(form.value);
      this.firebaseService.request(form.value);
    }
  }
}
