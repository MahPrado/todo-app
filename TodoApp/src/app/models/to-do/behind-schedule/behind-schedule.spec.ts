import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindSchedule } from './behind-schedule';

describe('BehindSchedule', () => {
  let component: BehindSchedule;
  let fixture: ComponentFixture<BehindSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehindSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(BehindSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
