import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCustomerFormComponent } from './template-customer-form.component';

describe('TemplateCustomerFormComponent', () => {
  let component: TemplateCustomerFormComponent;
  let fixture: ComponentFixture<TemplateCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCustomerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
