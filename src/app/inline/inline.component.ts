import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<h1>Hello this is Inline Template</h1>`,
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
