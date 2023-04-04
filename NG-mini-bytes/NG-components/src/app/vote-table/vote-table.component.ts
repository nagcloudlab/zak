import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-table',
  templateUrl: './vote-table.component.html',
  styleUrls: ['./vote-table.component.scss']
})
export class VoteTableComponent {

  @Input("value")
  voteLines: Array<any> = []

}
