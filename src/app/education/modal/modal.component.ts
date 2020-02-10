import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  messageForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }

}
