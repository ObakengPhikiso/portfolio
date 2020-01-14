import { Injectable } from '@angular/core';
import {MatSnackBar,   MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  danger(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5 * 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['danger-snackbar']
    });
  }

  success(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5 * 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar']
    });
  }

  warning(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5 * 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['warning-snackbar']
    });
  }
}
