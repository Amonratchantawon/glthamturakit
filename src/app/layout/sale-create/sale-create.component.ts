import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AccountFormModel } from "../account.model";
import { AccountCreateService } from "../account-create/account-create.service";
import { AccountListModel, AccountModel } from "../account.model";
@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss']
})
export class SaleCreateComponent implements OnInit {
  accountForm: AccountFormModel = new AccountFormModel();
  accounts: AccountListModel = new AccountListModel();
  account: AccountModel = new AccountModel();
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
    console.log(date);
  }

  selectedContact(item) {
    console.log('Contact ', item);
  }

  itemsCallback(item) {
    console.log(item);
  }
}
