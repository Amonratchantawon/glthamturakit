import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

import { ExpendListsService } from "./expend-lists.service";
import { ExpendListModel } from 'assets/models/expend-lists.model';

@Component({
  selector: 'app-expend-lists',
  templateUrl: './expend-lists.component.html',
  styleUrls: ['./expend-lists.component.scss'],
  animations: [routerTransition()]

})
export class ExpendListsComponent implements OnInit {
  expends: ExpendListModel = new ExpendListModel();
  constructor(private route: ActivatedRoute, private router: Router, private expendListsService: ExpendListsService) { }

  ngOnInit() {
    this.expendListsService.getExpends().then((data) => {
      this.expends.expend = data;
    }, (error) => {
      console.error(error);
    })
  }

  goToDetail(item) {
    this.router.navigate(['/expend-create'], { queryParams: { item: JSON.stringify(item) } });
  }

  deleteExpend(_id) {
    window.event.stopPropagation();
    this.expendListsService.deleteExpends(_id).then((data) => {
      this.ngOnInit();
    }, (error) => {
      console.error(error);
    })
  }

}
