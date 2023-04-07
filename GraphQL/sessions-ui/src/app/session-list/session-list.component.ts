import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {

  sessions: any[] = [];

  constructor(private apollo: Apollo) {

  }

  ngOnInit() {
    this.apollo.query({
      query: gql`
      query{
        sessions {
          title
        }
      }
        `
    }).subscribe((result: any) => {
      this.sessions = result.data.sessions;
    })
  }


}
