import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-voting-table',
  templateUrl: './voting-table.component.html',
  styleUrls: ['./voting-table.component.css']
})
export class VotingTableComponent {

  votingLines: any = {}

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(state => state.votingLines)
      .subscribe(votingLines => {
        this.votingLines = votingLines;
      })
  }

}
