import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { take, map, tap } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService, private router: Router, private readonly notification: NotificationService, ) { }

  canActivate(next, state): Observable<boolean> {
    return this.firebaseService.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          this.notification.danger('Access denied, unauthorized user');
          this.router.navigate(['/Mighty.1872Admin']);
        }
      })
    );
  }

}
