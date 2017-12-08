import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss']
})
export class AccountDropdownComponent implements OnInit {
  @Input('data') data: Array<Object>;
  @Input('selected') selected: AccountModel;
  @Output() callback = new EventEmitter();
  
  accounts: Array<any>;
  selectedAccount: any;

  constructor() { }

  ngOnInit() {
    this.getAccount();
    this.selectedAccount = this.selected;
  }
  getAccount() {
    this.accounts = this.data;
  }
  onChangeItem() {
    this.callback.emit(this.selectedAccount);
  }
}


export class AccountModel {
  _id: string;
  name: string;
  accountno: string;
  parent: string;
  status: string;
}