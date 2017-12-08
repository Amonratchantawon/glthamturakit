import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListsRoutingModule } from "./contact-lists-routing.module";
import { ContactListsComponent } from "./contact-lists.component";

@NgModule({
  imports: [
    CommonModule,
    ContactListsRoutingModule
  ],
  declarations: [ContactListsComponent]
})
export class ContactListsModule { }
