import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingTest } from './reading-test';

describe('ReadingTest', () => {
  let component: ReadingTest;
  let fixture: ComponentFixture<ReadingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
