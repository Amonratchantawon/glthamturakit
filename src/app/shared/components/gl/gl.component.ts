import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gl',
  templateUrl: './gl.component.html',
  styleUrls: ['./gl.component.scss']
})
export class GlComponent implements OnInit {
  @Input() glReport : any;
  constructor() { }

  ngOnInit() {
  }

}
