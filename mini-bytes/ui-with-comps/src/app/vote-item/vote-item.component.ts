import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote-item',
  templateUrl: './vote-item.component.html',
  styleUrls: ['./vote-item.component.scss']
})
export class VoteItemComponent {

  @Input()
  value: string = ""

  voteLine: any = { up: 0, down: 0 }

  @Output()
  vote: EventEmitter<any> = new EventEmitter<any>()

  handleUpVote(event: Event, n: number) {
    this.voteLine.up += n;
    this.vote.emit({ name: this.value, voteLine: this.voteLine });
  }
  handleDownVote(event: Event, n: number) {
    this.voteLine.down += n;
    this.vote.emit({ name: this.value, voteLine: this.voteLine });
  }

}
