import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 150000,
      description: 'Mac pro',
      isAvailable: true,
      imgPath: 'assets/Laptop.png'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 47000,
      description: 'Iphone pro',
      isAvailable: false,
      imgPath: 'assets/Mobile.png'
    },
  ]

  currentTab: number = 1

  handleTabChange(event: Event, tabIndex: number) {
    this.currentTab = tabIndex
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }


}
