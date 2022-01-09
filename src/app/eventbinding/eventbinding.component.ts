import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  serverStatus = "Server is not available";
  serverName = ''

  constructor() { }

  ngOnInit(): void {
  }

  onClickServer() {
    this.serverStatus = "Server available"
  }

  onChangeNameInput(event: any) {
    this.serverName = event.target.value
  }
}
