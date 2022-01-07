import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.css']
})
export class PropbindingComponent implements OnInit {

  disable = false;

  constructor() { 
    // Will be disabled after 3 seconds
    setTimeout(() => {
      this.disable = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

}
