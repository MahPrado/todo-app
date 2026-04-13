import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessTask } from './sucess-task';

describe('SucessTask', () => {
  let component: SucessTask;
  let fixture: ComponentFixture<SucessTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
