import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent {

  @Input()
  fooProp: any = {}

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck() {
    console.log('foo::ngDoCheck');
    this.cd.detectChanges()
  }

}
