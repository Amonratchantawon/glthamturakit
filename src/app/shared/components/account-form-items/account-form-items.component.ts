import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-form-items',
  templateUrl: './account-form-items.component.html',
  styleUrls: ['./account-form-items.component.scss']
})
export class AccountFormItemsComponent implements OnInit {
  @Input('accounts') accounts: Array<Object>;
  @Output() itemsCallback = new EventEmitter();
  selectItem: SelectItem = new SelectItem();
  items: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  selected(item) {
    this.selectItem.account = item;
  }

  onQtyChange(selectItem) {
  }

  addItem() {
    this.items.push(this.selectItem);
    this.selectItem = new SelectItem();
    this.selectItem.account = this.items[this.items.length - 1].account;
    this.calculate();
  }

  removeItem(i) {
    this.items.splice(i, 1);
    this.calculate();
  }

  calculate() {
    this.itemsCallback.emit(this.items);
  }
}

export class SelectItem {
  account: AccountModel = new AccountModel();
  qty: number;
  vatamount: number;
  amount: number;
}

export class AccountModel {
  _id: string;
  name: string;
  accountno: string;
  parent: string;
  status: string;
  vat: number;
  unitprice: number;
}
