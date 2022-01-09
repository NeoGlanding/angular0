import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestComponent } from './test/test.component';
import { InlineComponent } from './inline/inline.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestComponent,
    InlineComponent,
    DatabindingComponent,
    PropbindingComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
