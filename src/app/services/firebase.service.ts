import { Injectable } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { About } from '../about/about';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: Observable<any>;
  userData: any;
  constructor(
    private readonly notification: NotificationService,
    private readonly fireStore: AngularFirestore,
    private readonly fireAuth: AngularFireAuth,
    private readonly router: Router,
    private http: HttpClient) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(curUser => {
        if (curUser) {
          this.userData = curUser;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
          return this.fireStore.doc(`users/${curUser.uid}`).valueChanges();
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
          return of(null);
        }
      })
    );
    this.getAllMessages();
  }
  allMessages: About[] = [];
  URL_MAIL: '';
  login(form: { email, password }) {
    this.fireAuth.auth.signInWithEmailAndPassword(form.email, form.password).then((user) => {
      this.notification.success(`welcome back ${user.user.email}`);
      this.router.navigate(['ythgim-Dashboard']);
    }).catch(err => {
      this.notification.danger(err.message);
    });
  }

  submit(form: About) {
    this.fireStore.collection('messages').add(form).then(() => {
      this.notification.success(`Thanks ${form.firstname} for getting in contact with me, you'll get my response in no time`);
    }).catch(err => {
      this.notification.danger(err.message);
    });
  }
  request(message: any) {
    this.http.post('https://us-central1-obakeng-phikiso.cloudfunctions.net/emailMessage', message).subscribe(() => {
    this.notification.success('email sent');
    }, err => {
      return this.notification.danger(err.message);
    });
  }
  async getAllMessages() {
    this.fireStore.collection('messages').get().subscribe(messages => {
      messages.forEach((message) => {
        return this.allMessages.push(this.mapMessages(message.data(), message.id));
      });
      return this.allMessages;
    });
  }

  deleteMessage(id: string) {
    return this.fireStore.collection('messages').doc(id).delete().then(() => {
      this.notification.danger('Message deleted');
    }).catch(err => {
      this.notification.warning(err.message);
    });
  }
  mapMessages(data: any, id: string) {
    return {
      id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      message: data.message,
    };
  }
}
