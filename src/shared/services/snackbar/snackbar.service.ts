import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../../commons/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  open(data: any): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        name: data
      },
      verticalPosition: "top",
      horizontalPosition: "center",
      duration: 3000
    })
  }
}
