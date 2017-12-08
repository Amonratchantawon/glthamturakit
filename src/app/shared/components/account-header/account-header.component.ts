import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {
  @Input('header') header: string;
  @Input('icon') icon: string = '';
  @Input('dataForm') dataForm: any;
  @Output() date = new EventEmitter();
  @Output() addNew = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.dataForm.docdate = this.dataForm._id ? new Date(this.dataForm.docdate) : new Date();
    // this.date.emit(this.docdate);
  }

  selectDocDate(docdate) {
    this.dataForm.docdate = new Date(docdate);
    // this.date.emit(this.docdate);
  }

  onAddNew() {
    this.addNew.emit();
  }
}
