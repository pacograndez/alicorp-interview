import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../commons/dialog/dialog.component";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  loaderDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private dialog: MatDialog
  ) { }

  open(name: string) {
    return this.dialog.open(DialogComponent, {
      width: '300px',
      height: '200px',
      data: {
        name: name
      },
      panelClass: 'my-dialog'
    })
  }
}
