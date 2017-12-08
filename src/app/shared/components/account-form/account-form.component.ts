import { Component, OnInit, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { AccountCreateService } from 'app/layout/account-create/account-create.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @Input('accountHeader') accountHeader: string;
  @Input('datas') datas: Array<any>;
  @Input('accountTotal') accountTotal: number;
  @Output() accountItems = new EventEmitter();
  account: AccountItemModel = new AccountItemModel();
  currentLang: string;
  completerText: string;
  protected dataService: CompleterData;
  constructor(
    private translate: TranslateService,
    private completerService: CompleterService,
    private accountCreateService: AccountCreateService,
    private differs: IterableDiffers
  ) {
  }

  ngOnInit() {
    this.accountCreateService.getAccount().then((data) => {
      data.sort((a, b) => { return (a.accountno > b.accountno) ? 1 : ((b.accountno > a.accountno) ? -1 : 0); });
      this.dataService = this.completerService.local(data, 'fullname', 'fullname');
    }, (error) => {
      console.error(error);
    });
  }

  selected(event, item, i) {
    // console.log(event);
    if (!item) {
      this.account.account = event.originalObject;
    } else {
      this.datas[i].account = event.originalObject;
    }
  }

  addItem() {
    this.currentLang = this.translate.currentLang;
    if (!this.account.account._id) {
      if (this.currentLang === 'th') {
        alert('กรุณาเลือกรหัสบัญชี');
      } else {
        alert('Please fill account.');
      }
      return false;
    }

    if (!this.account.amount) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุจำนวนเงิน');
      } else {
        alert('Please fill amount.');
      }
      return false;
    }
    this.completerText = '';
    this.datas = this.datas ? this.datas : [];
    this.datas.push(this.account);
    this.account = new AccountItemModel();
    this.account.account = this.datas[this.datas.length - 1].account;
    this.calculate();
  }

  removeItem(index) {
    this.datas.splice(index, 1);
    this.calculate();
  }

  onChangeAmount() {
    this.calculate();
  }

  calculate() {
    this.accountTotal = 0;
    let length = this.datas.length;
    for (let i = 0; i < length; i++) {
      this.accountTotal += this.datas[i].amount;
    }
    this.accountTotal =  Number(this.accountTotal.toFixed(2));
    // console.log('tets');
    this.accountItems.emit({
      accounts: this.datas,
      totalaccount: this.accountTotal
    });
  }

}
export class AccountItemModel {
  account: AccountModel = new AccountModel();
  description: string;
  amount: number;
}

export class AccountModel {
  _id: string;
  name: string;
  accountno: string;
  parent: string;
  status: string;
}
