import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-finlex-frontend';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModal, {
      // width: '250px',
      // data: { name: this.name, color: this.color }
    });

    // dialogRef.afterClosed().subscribe(res => {
    //   this.color = res;
    // });
}
}

@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.html',
})
export class DialogModal {
  constructor( public dialogRef: MatDialogRef<DialogModal>){}
  close() {
    this.dialogRef.close("Thanks for using me!");
  }
}