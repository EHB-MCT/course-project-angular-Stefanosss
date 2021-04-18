import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-title',
  templateUrl: './heading-title.component.html',
  styleUrls: ['./heading-title.component.scss']
})
export class HeadingTitleComponent implements OnInit {

  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
