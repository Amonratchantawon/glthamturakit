import { CompanyService } from './company.service';
import { Component, OnInit } from '@angular/core';
import { CompanyModel } from 'assets/models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyData: CompanyModel = new CompanyModel();

  constructor(public companyService: CompanyService) {

  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompany().then((res) => {
      this.companyData = (res[0]) ? res[0] : {};
      console.log(this.companyData);
    }).catch((err) => {
      console.log(err);
    })
  }

  saveCompany(companyData) {
    console.log(companyData);
    if (companyData._id) {
      this.companyService.upDateCompany(companyData).then((res) => {
        this.companyData = res;
        console.log(res);
      })
    }else{
      this.companyService.postCompany(companyData).then((res)=>{
        this.companyData = res;
        console.log(res);
      })
    }

  }

}
