import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakCardComponent } from './zak-card.component';

describe('ZakCardComponent', () => {
  let component: ZakCardComponent;
  let fixture: ComponentFixture<ZakCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZakCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
