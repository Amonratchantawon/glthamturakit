import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ExpendCreateService } from "./expend-create.service";
import { ExpendModel } from 'assets/models/expend-create.model';

@Component({
  selector: 'app-expend-create',
  templateUrl: './expend-create.component.html',
  styleUrls: ['./expend-create.component.scss']

})
export class ExpendCreateComponent implements OnInit {
  subParams: any;
  expend: ExpendModel = new ExpendModel();
  constructor(private route: ActivatedRoute, private router: Router, private expendCreateService: ExpendCreateService) { }

  ngOnInit() {
    this.subParams = this.route
      .queryParams
      .subscribe(params => {
        let item = params['item'];
        if (item && item !== '') {
          this.expend = JSON.parse(item);
        }
      });
    this.subParams.unsubscribe();
  }

  onCalculate() {
    let unitprice = this.expend.unitprice;
    let vat = this.expend.vat;
    this.expend.netamount = ((unitprice / 100) * vat) + unitprice;
  }

  saveExpent() {
    let expend = this.expend;
    if (expend._id) {
      this.expendCreateService.putExpend(expend).then((data) => {
        this.router.navigate(['/expend-lists']);
      }, (error) => {
        console.error(error);
      });
    } else {
      this.expendCreateService.postExpend(expend).then((data) => {
        this.router.navigate(['/expend-lists']);
      }, (error) => {
        console.error(error);
      });
    }
  }

}
