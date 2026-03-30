import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasNoTask } from './has-no-task';

describe('HasNoTask', () => {
  let component: HasNoTask;
  let fixture: ComponentFixture<HasNoTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HasNoTask],
    }).compileComponents();

    fixture = TestBed.createComponent(HasNoTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
