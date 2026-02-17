import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAccPage } from './login-acc.page';

describe('LoginAccPage', () => {
  let component: LoginAccPage;
  let fixture: ComponentFixture<LoginAccPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
