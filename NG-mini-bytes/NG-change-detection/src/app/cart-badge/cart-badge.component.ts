import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBadgeComponent {

  @Input()
  cartStream!: Observable<any>

  count: number = 0

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cartStream.subscribe({
      next: (countCount) => {
        this.count = countCount
        this.cd.markForCheck();
      }
    })
  }

}
