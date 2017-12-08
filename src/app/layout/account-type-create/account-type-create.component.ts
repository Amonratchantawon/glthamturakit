import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountTypeModel } from 'assets/models/account-type.model';
import { TranslateService } from '@ngx-translate/core';
import { AccountTypeService } from './account-type.service';

@Component({
  selector: 'app-account-type-create',
  templateUrl: './account-type-create.component.html',
  styleUrls: ['./account-type-create.component.scss']
})
export class AccountTypeCreateComponent implements OnInit {
  accountType: AccountTypeModel = new AccountTypeModel();
  currentLang: string;
  subParams: any;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private router: Router,
    private accountTypeService: AccountTypeService
  ) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this.subParams = this.route
      .queryParams
      .subscribe(params => {
        let item = params['item'];
        if (item && item !== '') {
          this.accountType = JSON.parse(item);
        }
      });
    this.subParams.unsubscribe();
  }

  saveAccountType() {
    this.currentLang = this.translate.currentLang;
    if (!this.accountType.accounttypeno) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุรหัสประเภทบัญชี');
      } else {
        alert('Please fill account type no.');
      }
      return false;
    }
    if (!this.accountType.accounttypename) {
      if (this.currentLang === 'th') {
        alert('กรุณาระบุชื่อประเภทบัญชี');
      } else {
        alert('Please fill account type name.');
      }
      return false;
    }

    if (this.accountType._id) {
      this.accountTypeService.putAccountType(this.accountType).then((data) => {
        this.router.navigate(['/account-type-list']);
      }, (error) => {
        if (JSON.parse(error._body).message) {
          alert(JSON.parse(error._body).message.split('index:')[1]);
        }
      });
    } else {
      this.accountTypeService.postAccountType(this.accountType).then((data) => {
        this.router.navigate(['/account-type-list']);
      }, (error) => {
        if (JSON.parse(error._body).message) {
          alert(JSON.parse(error._body).message.split('index:')[1]);
        }
      });
    }

  }

}
