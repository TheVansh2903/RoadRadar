import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnBoardPage } from './on-board.page';

describe('OnBoardPage', () => {
  let component: OnBoardPage;
  let fixture: ComponentFixture<OnBoardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
