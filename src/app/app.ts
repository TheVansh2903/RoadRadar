import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('RoadRadar');
}
