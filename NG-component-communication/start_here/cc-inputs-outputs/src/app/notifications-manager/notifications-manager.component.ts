import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {

  @Input()
  notificationsCount = 0

  @Output()
  notiChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.notificationsCount++;
    this.notiChange.emit(this.notificationsCount);
  }

  removeNotification() {
    if (this.notificationsCount == 0) {
      return;
    }
    this.notificationsCount--;
    this.notiChange.emit(this.notificationsCount);
  }

  resetCount() {
    this.notificationsCount = 0;
    this.notiChange.emit(this.notificationsCount);
  }

}
