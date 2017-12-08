import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AccountFormModel } from "../account.model";
import { AccountCreateService } from "../account-create/account-create.service";
import { AccountListModel, AccountModel } from '../account.model';
import { BuyModel } from 'assets/models/buy.model';
@Component({
  selector: 'app-buy-create',
  templateUrl: './buy-create.component.html',
  styleUrls: ['./buy-create.component.scss']
})
export class BuyCreateComponent implements OnInit {
  accountForm: AccountFormModel = new AccountFormModel();
  accounts: AccountListModel = new AccountListModel();
  account: AccountModel = new AccountModel();
  contact: AccountModel = new AccountModel();
  buy: BuyModel = new BuyModel();
  currentLang: string;
  constructor(private accountCreateService: AccountCreateService, private translate: TranslateService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.accountCreateService.getAccount().then((data) => {
      this.accounts.accounts = data;
      this.accounts.accounts.sort((a, b) => { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
    }, (error) => {
      console.error(error);
    });
  }

  docdate(date) {
    this.buy.docdate = date;
  }

  selectedContact(item) {
    this.buy.contact = item;
  }

  itemsCallback(item) {

  }
}
