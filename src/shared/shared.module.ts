import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './commons/dialog/dialog.component';
import {SnackbarComponent} from './commons/snackbar/snackbar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent
  ],
  exports: [
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule {
}
