import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnswerComponent } from './my-answer.component';

describe('MyAnswerComponent', () => {
  let component: MyAnswerComponent;
  let fixture: ComponentFixture<MyAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
