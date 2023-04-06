import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  @Input()
  name: string = ""
  ngOnInit() {
    throw new Error('Bar Error')
  }

  ngDoCheck() {
    console.log("bar::ngDoCheck()");
  }

}
