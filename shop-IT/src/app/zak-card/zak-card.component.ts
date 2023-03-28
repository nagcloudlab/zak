import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zak-card',
  templateUrl: './zak-card.component.html',
  styleUrls: ['./zak-card.component.scss']
})
export class ZakCardComponent {

  @ContentChild("h", { read: ElementRef })
  hRef!: ElementRef;

  @ViewChild("f", { read: ElementRef })
  fRef!: ElementRef;

  ngAfterContentInit() {
    console.log("ZakCardComponent::ngAfterContentInit");
    // to-do any side-effect after content intialization
    // console.log(this.hRef.nativeElement);
    // if (this.hRef.nativeElement) {
    //   this.hRef.nativeElement.innerText = "Hello World";
    // }
  }

  ngAfterViewInit() {
    console.log("ZakCardComponent::ngAfterViewInit");
    // to-do any side-effect after view intialization
    console.log(this.fRef.nativeElement);
    this.fRef.nativeElement.innerText = "ZakApps - 2023";
  }

}
