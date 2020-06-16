import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contract } from '../model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../_service/contract.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: Contract[];

  constructor(public dialog: MatDialog,
    private contractService: ContractService) { }

  ngOnInit(): void {

    this.contractService.getContracts().subscribe(result => {
      const res = JSON.parse(JSON.stringify(result))
      if (res.status) {
        this.contractList = res.constracts
      }
    }, error => {

    })

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModal);
  }

}


@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.html',
  styleUrls: ['dialog-modal.css']
})
export class DialogModal {
  description = "New Contract Form"
  newContract: Contract;
  contractForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    totalPrice: new FormControl(),
    brokerName: new FormControl(),
    brokerAddress: new FormControl(),
    contractStartDate: new FormControl(),
    contractEndDate: new FormControl()
  });
  constructor(
    public dialogRef: MatDialogRef<DialogModal>,
    private _snackBar: MatSnackBar,
    private contractService: ContractService) { }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }
  save() {
    console.log("valid" + this.contractForm.valid)
    if (this.contractForm.valid) {
      this.newContract = this.contractForm.value;
      this.contractService.createContract(this.newContract).subscribe(result => {
        this.dialogRef.close()
        this._snackBar.open("Data Saved. ", "Dismiss")
      })
    }
  }
}