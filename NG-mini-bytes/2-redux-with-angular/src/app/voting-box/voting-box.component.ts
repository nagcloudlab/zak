import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.css']
})
export class VotingBoxComponent {

  votingLines: any = {}

  handleVote(vote: any) {
    let { name, voteLine } = vote;
    this.votingLines[name] = voteLine;
  }

}
