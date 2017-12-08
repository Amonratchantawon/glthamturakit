import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AccountCreateService } from "./account-create.service";
import { AccountListModel, AccountModel } from '../account.model';
import { AccountTypeModel } from 'assets/models/account-type.model';
import { AccountTypeListService } from '../account-type-list/account-type-list.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {
  parents: AccountListModel = new AccountListModel();
  account: AccountModel = new AccountModel();
  accountTypeList: Array<AccountTypeModel>;
  accounttypeId: string = '';
  error: string;
  subParams: any;
  status: Array<string> = ['active', 'inactive'];
  currentLang: string;
  constructor(
    private accountCreateService: AccountCreateService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private accountTypeListService: AccountTypeListService,
  ) { }

  ngOnInit() {
    this.getAccount();
    this.getAccountTypeList();
  }

  getAccountTypeList() {
    this.accountTypeListService.getAccountTypeList().then((data) => {
      this.accountTypeList = data;
    }, (error) => {
      if (JSON.parse(error._body).message) {
        alert(JSON.parse(error._body).message.split('index:')[1]);
      }
    });
  }

  getAccount() {
    this.accountCreateService.getAccount().then((data) => {
      this.parents.accounts = data;
      this.parents.accounts.unshift({
        _id: '',
        name: '--- No Parent ---',
        accountno: '',
        parent: '',
        status: '',
        accounttype: null
      });
      this.parents.accounts.sort((a, b) => { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
      this.getParam();
    }, (error) => {
      console.error(error);
    });
  }

  getParam() {
    this.subParams = this.route
      .queryParams
      .subscribe(params => {
        let item = params['item'];
        if (item && item !== '') {
          this.account = JSON.parse(item);
          if (this.account.accounttype) {
            this.accounttypeId = this.account.accounttype._id;
          }
        }
      });
    this.subParams.unsubscribe();
  }

  onChangeType(id) {
    var length = this.accountTypeList.length;
    for (let index = 0; index < length; index++) {
      if (id === this.accountTypeList[index]._id) {
        this.account.accounttype = this.accountTypeList[index];
        return;
      }
    }

  }

  saveAccount() {
    this.currentLang = this.translate.currentLang;
    if (!this.account.accounttype || !this.account.accounttype._id) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุประเภทบัญชี');
      } else {
        alert('Please fill account type.');
      }
      return false;
    }
    if (!this.account.accountno) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุรหัสบัญชี');
      } else {
        alert('Please fill account no.');
      }
      return false;
    }
    if (!this.account.name) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุชื่อบัญชี');
      } else {
        alert('Please fill account name.');
      }
      return false;
    }

    if (this.account._id) {
      this.accountCreateService.putAccount(this.account).then((data) => {
        this.router.navigate(['/account']);
      }, (error) => {
        this.error = JSON.parse(error._body).message;
        alert(this.error);
      });
    } else {
      this.accountCreateService.postAccount(this.account).then((data) => {
        this.router.navigate(['/account']);
      }, (error) => {
        if (JSON.parse(error._body).message) {
          alert(JSON.parse(error._body).message.split('index:')[1]);
        }
      });
    }
  }
}
