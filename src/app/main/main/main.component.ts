import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalDialogService} from '../../shared/modal-dialog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private readonly modalDialogService: ModalDialogService) {}

  openDialog(): void {

    const title = 'Title';
    const message = 'message';

    const ref = this.modalDialogService.showConfirmationDialog(title, message);
    ref.afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log('chose true');
      }
    });
  }

  ngOnInit(): void {
  }

}
