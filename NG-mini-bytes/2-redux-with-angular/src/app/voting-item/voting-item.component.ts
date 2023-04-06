import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { down, up } from '../ngrx/voting.actions';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.css']
})
export class VotingItemComponent {

  @Input() value: string = "";

  constructor(private store: Store<any>) { }

  // state
  voteLine = { up: 0, down: 0 }


  handleUpVote() {
    console.log(this.voteLine);
    this.voteLine.up++;
    console.log(this.voteLine);
    // this.vote.emit({ name: this.value, voteLine: this.voteLine });
    this.store.dispatch(up({ name: this.value, votingLine: { ...this.voteLine } }));
  }
  handleDownVote() {
    this.voteLine.down++;
    // this.vote.emit({ name: this.value, voteLine: this.voteLine });
    this.store.dispatch(down({ name: this.value, votingLine: { ...this.voteLine } }));
  }


}
