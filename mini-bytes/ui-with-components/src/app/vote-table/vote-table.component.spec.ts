import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTableComponent } from './vote-table.component';

describe('VoteTableComponent', () => {
  let component: VoteTableComponent;
  let fixture: ComponentFixture<VoteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
