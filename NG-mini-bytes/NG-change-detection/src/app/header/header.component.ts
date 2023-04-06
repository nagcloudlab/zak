import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentUser = "Guest"


  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cd.detach();
  }

  ngDoCheck() {
    console.log("header:ngDoCheck()");
  }

}
