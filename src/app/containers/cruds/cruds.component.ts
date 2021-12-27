import { Component, OnInit } from '@angular/core';
import {DialogService} from "../../../shared/services/dialog/dialog.service";

@Component({
  selector: 'app-crud',
  templateUrl: './cruds.component.html',
  styleUrls: ['./cruds.component.scss'],
})
export class CrudsComponent implements OnInit {

  show: boolean = false;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.dialogService.loaderDialog.subscribe((res: boolean) => {
      this.show = res;
    })
  }

}
