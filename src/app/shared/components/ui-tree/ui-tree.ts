import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the Search
@Component({
  selector: "ui-tree",
  templateUrl: './ui-tree.html',
  styleUrls: ['./ui-tree.scss']
})
export class UiTree {
  @Input('data') items: Array<Object>;
  @Input('key') key: string;
  @Output() treeCallback = new EventEmitter();
  @Output() treeEditCallback = new EventEmitter();
  @Output() treeDeleteCallback = new EventEmitter();

  clickItem(item) {
    window.event.stopPropagation();
    // item.expand = item.expand ? false : true;
    // this.treeCallback.emit(item);
    this.treeEditCallback.emit(item);
    
  }

  onEditItem(item) {
    window.event.stopPropagation();
    this.treeEditCallback.emit(item);
  }

  onDeleteItem(item) {
    window.event.stopPropagation();
    this.treeDeleteCallback.emit(item);
  }

  onEdit(event) {
    window.event.stopPropagation();
    this.treeEditCallback.emit(event);
  }

  treeReturn(event) {
    this.treeCallback.emit(event);
  }
}