import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

import { ContactCreateService } from "./contact-create.service";
import { ContactModel } from 'assets/models/contact-create.model';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss'],
  animations: [routerTransition()]

})
export class ContactCreateComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  subParams: any;
  constructor(private route: ActivatedRoute, private router: Router, private contactCreateService: ContactCreateService) {
  }
  ngOnInit() {
    this.subParams = this.route
      .queryParams
      .subscribe(params => {
        let item = params['item'];
        if (item && item !== '') {
          this.contact = JSON.parse(item);
        }
      });
    this.subParams.unsubscribe();
  }

  saveContact() {
    let contact = this.contact;
    if (contact._id) {
      this.contactCreateService.putContact(contact).then((data) => {
        this.router.navigate(['/contact-lists']);
      }, (error) => {
        console.error(error);
      });
    } else {
      this.contactCreateService.postContact(contact).then((data) => {
        this.router.navigate(['/contact-lists']);
      }, (error) => {
        console.error(error);
      });
    }
  }

}
