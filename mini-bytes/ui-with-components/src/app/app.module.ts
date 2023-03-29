import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoteBoxComponent } from './vote-box/vote-box.component';
import { VoteItemComponent } from './vote-item/vote-item.component';
import { VoteTableComponent } from './vote-table/vote-table.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteBoxComponent,
    VoteItemComponent,
    VoteTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
