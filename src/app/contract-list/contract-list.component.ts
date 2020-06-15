import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList : any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.contractList = [
      {
        "name": "Customer",
        "address": "Customer Address",
        "totalPrice": 38,
        "brokerName": "Broker Name",
        "brokerAddress": "Broker Address",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
    
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer2",
        "address": "Customer Address2",
        "totalPrice": 20,
        "brokerName": "Broker Name2",
        "brokerAddress": "Broker Address2",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
    
      },
      {
        "name": "Customer3",
        "address": "Customer Address3",
        "totalPrice": 32,
        "brokerName": "Broker Name3",
        "brokerAddress": "Broker Address3",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer",
        "address": "Customer Address",
        "totalPrice": 38,
        "brokerName": "Broker Name",
        "brokerAddress": "Broker Address",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
    
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer1",
        "address": "Customer Address1",
        "totalPrice": 10,
        "brokerName": "Broker Name1",
        "brokerAddress": "Broker Address1",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      },
      {
        "name": "Customer2",
        "address": "Customer Address2",
        "totalPrice": 20,
        "brokerName": "Broker Name2",
        "brokerAddress": "Broker Address2",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
    
      },
      {
        "name": "Customer3",
        "address": "Customer Address3",
        "totalPrice": 32,
        "brokerName": "Broker Name3",
        "brokerAddress": "Broker Address3",
        "contractStartDate": new Date(),
        "contractEndDate": new Date()
      }
    ]

  }

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