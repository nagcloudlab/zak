import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingBoxComponent } from './voting-box/voting-box.component';
import { VotingItemComponent } from './voting-item/voting-item.component';
import { VotingTableComponent } from './voting-table/voting-table.component';
import { StoreModule } from '@ngrx/store';
import { votingLinesReducer } from './ngrx/voting.reducer';

@NgModule({
  declarations: [
    AppComponent,
    VotingBoxComponent,
    VotingItemComponent,
    VotingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ votingLines: votingLinesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
