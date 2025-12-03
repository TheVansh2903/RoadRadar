import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  styleUrls: ['./login.css'],
  templateUrl: './login.html',
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('signUpBtn') signUpBtn!: ElementRef;
  @ViewChild('signInBtn') signInBtn!: ElementRef;
  @ViewChild('containerDiv') containerDiv!: ElementRef;

  ngAfterViewInit(): void {
    // Safe: executes only in the browser
    setTimeout(() => {
      this.signUpBtn.nativeElement.addEventListener('click', () => {
        this.containerDiv.nativeElement.classList.add('right-panel-active');
      });

      this.signInBtn.nativeElement.addEventListener('click', () => {
        this.containerDiv.nativeElement.classList.remove('right-panel-active');
      });
    });
  }
}
