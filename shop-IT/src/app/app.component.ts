import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  isCartOpen: boolean = false;

  togglecartView() {
    this.isCartOpen = !this.isCartOpen;
  }


}
