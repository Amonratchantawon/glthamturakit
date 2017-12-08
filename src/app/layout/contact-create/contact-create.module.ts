import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactListsRoutingModule } from "./contact-create-routing.module";
import { ContactCreateComponent } from "./contact-create.component";

@NgModule({
  imports: [
    CommonModule,
    ContactListsRoutingModule,
    FormsModule
  ],
  declarations: [ContactCreateComponent]
})
export class ContactCreateModule { }
