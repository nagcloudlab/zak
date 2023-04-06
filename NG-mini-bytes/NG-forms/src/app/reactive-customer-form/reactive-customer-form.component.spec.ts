import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCustomerFormComponent } from './reactive-customer-form.component';

describe('ReactiveCustomerFormComponent', () => {
  let component: ReactiveCustomerFormComponent;
  let fixture: ComponentFixture<ReactiveCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCustomerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
