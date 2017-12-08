import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactListsService } from "./contact-lists.service";
import { ContactListModel } from 'assets/models/contact-lists.model';

@Component({
  selector: 'app-contact-lists',
  templateUrl: './contact-lists.component.html',
  styleUrls: ['./contact-lists.component.scss'],
  animations: [routerTransition()]

})
export class ContactListsComponent implements OnInit {
  contacts: ContactListModel = new ContactListModel();
  constructor(private route: ActivatedRoute, private router: Router, private contactListsService: ContactListsService) { }

  ngOnInit() {
    this.contactListsService.getContacts().then((data) => {
      this.contacts.contact = data;
    }, (error) => {
      console.error(error);
    })
  }

  goToDetail(item) {
    this.router.navigate(['/contact-create'], { queryParams: { item: JSON.stringify(item) } });
  }

  deleteContact(_id) {
    window.event.stopPropagation();
    this.contactListsService.deleteContacts(_id).then((data) => {
      this.ngOnInit();
    }, (error) => {
      console.error(error);
    })
  }

}
