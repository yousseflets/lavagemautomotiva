import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('temp-app');
  readonly year = new Date().getFullYear();
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // debug navigation
        // eslint-disable-next-line no-console
        console.log('[App] NavigationEnd:', e.urlAfterRedirects);
      }
    });
  }
}
