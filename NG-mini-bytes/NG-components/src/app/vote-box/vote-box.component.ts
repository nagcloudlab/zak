import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-box',
  templateUrl: './vote-box.component.html',
  styleUrls: ['./vote-box.component.scss']
})
export class VoteBoxComponent {

  voteLines: Array<any> = []

  handleVote(voteLine: any) {
    let { name } = voteLine
    let existingVoteLine = this.voteLines.find(v => v.name === name)
    if (!existingVoteLine) {
      this.voteLines.push({ name, voteLine })
    } else {
      existingVoteLine.voteLine = voteLine
    }
  }

}
