import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public snackBar: MatSnackBar) { }

  leftSideMenuBar: Boolean = false;
  rightSideMenuBar: Boolean = false;

  openSnackBar(message: string, action: string, type: string) {
    if (type == "danger") {
      this.snackBar.open(message, action, {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        //panelClass: [type]
        panelClass: ['danger-snackbar']
      });
    }
    if (type == "success") {
      this.snackBar.open(message, action, {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        //panelClass: [type]
        panelClass: ['success-snackbar']
      });
    }
  }
}
