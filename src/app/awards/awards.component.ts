import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)])
  });
  constructor(private readonly firebaseService: FirebaseService) { }

  ngOnInit() {
  }
async submit(form: FormGroup) {
  if (form.valid) {
    await this.firebaseService.login(form.value);
  }
  }
}
