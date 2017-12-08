import { Component, OnInit } from '@angular/core';
import { AccountTypeListService } from './account-type-list.service';
import { AccountTypeModel } from 'assets/models/account-type.model';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-type-list',
  templateUrl: './account-type-list.component.html',
  styleUrls: ['./account-type-list.component.scss']
})
export class AccountTypeListComponent implements OnInit {
  accountTypeList: Array<AccountTypeModel>;
  currentLang: string;

  constructor(
    private accountTypeListService: AccountTypeListService,
    private translate: TranslateService,
    private router: Router,
  ) { }

  ngOnInit() {
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

  goAccountTypeDetail(item) {
    this.router.navigate(['/account-type-create'], { queryParams: { item: JSON.stringify(item) } });
  }

  onDeleteItem(item) {
    window.event.stopPropagation();
    this.currentLang = this.translate.currentLang;
    if (this.currentLang === 'th') {
      let res = confirm('คุณต้องการลบรายการนี้?');
      if (!res) {
        return;
      }
    } else {
      let res = confirm('Would you like to delete this transaction?');
      if (!res) {
        return;
      }
    }
    this.accountTypeListService.deleteAccountType(item._id).then((data) => {
      if (this.currentLang === 'th') {
        alert('ลบข้อมูล ' + data.accounttypename + ' สำเร็จ');
      } else {
        alert('Delete ' + data.accounttypename + ' success.');
      }
      this.ngOnInit();
    }, (error) => {
      if (this.currentLang === 'th') {
        alert('ลบข้อมูลไม่สำเร็จ กรุณาลองใหม่');
      } else {
        alert('Delete fail please try again.');
      }
    });
  }

}
