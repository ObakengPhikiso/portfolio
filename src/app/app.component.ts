import { Component } from '@angular/core';
import { trigger, style, animate, state, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideIn', [
      state('flyIn', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s 300ms ease-in')
      ])
    ])
  ]
})
export class AppComponent {
}
