import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHub } from './test-hub';

describe('TestHub', () => {
  let component: TestHub;
  let fixture: ComponentFixture<TestHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
