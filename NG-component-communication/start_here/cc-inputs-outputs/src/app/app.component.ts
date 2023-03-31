import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationCount = 0;
  handleNotiChange(count: number) {
    this.notificationCount = count;
  }
}
