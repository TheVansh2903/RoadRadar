import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  styleUrls: ['./login.css'],
  templateUrl: './login.html',
  imports: [FormsModule],
})
export class LoginComponent implements AfterViewInit, OnInit {
  @ViewChild('signUpBtn') signUpBtn!: ElementRef;
  @ViewChild('signInBtn') signInBtn!: ElementRef;
  @ViewChild('containerDiv') containerDiv!: ElementRef;

  // ✅ constructor to detect browser vs server
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  signupUsers: { userName: string; email: string; password: string }[] = [];

  signupObj: { userName: string; email: string; password: string } = {
    userName: '',
    email: '',
    password: '',
  };

  loginObj: { email: string; password: string } = {
    email: '',
    password: '',
  };

  ngAfterViewInit(): void {
    // Safe: executes only in the browser after view is ready
    if (!this.isBrowser) return;

    setTimeout(() => {
      this.signUpBtn.nativeElement.addEventListener('click', () => {
        this.containerDiv.nativeElement.classList.add('right-panel-active');
      });

      this.signInBtn.nativeElement.addEventListener('click', () => {
        this.containerDiv.nativeElement.classList.remove('right-panel-active');
      });
    });
  }

  ngOnInit(): void {
    if (!this.isBrowser) return; // ✅ guard SSR

    const localData = localStorage.getItem('signupUsers'); // ✅ key name fixed
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    // push a copy of signupObj
    this.signupUsers.push({ ...this.signupObj });

    if (this.isBrowser) {
      // ✅ same key as in ngOnInit
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    }

    // reset form model
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onSignIn() {
    const isUserExist = this.signupUsers.find(
      (m) => m.email === this.loginObj.email && m.password === this.loginObj.password
    );

    if (isUserExist) {
      alert('User Login Successfully');
    } else {
      alert('Wrong Credentials');
    }
  }
}
