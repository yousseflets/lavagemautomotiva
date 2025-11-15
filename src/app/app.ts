import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('temp-app');
  readonly year = new Date().getFullYear();
  private pendingFragment: string | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log('[App] NavigationEnd:', e.urlAfterRedirects);
        if (this.pendingFragment) {
          setTimeout(() => {
            const id = this.pendingFragment as string;
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.pendingFragment = null;
          }, 50);
        }
      }
    });
  }

  goToFragment(fragment: string, event?: Event) {
    event?.preventDefault();
    const currentPath = this.router.url.split('#')[0] || '/';
    // If we're already on the root page, just scroll to the element
    if (currentPath === '/' || currentPath === '') {
      const el = document.getElementById(fragment);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback: navigate to root then set pending fragment
        this.pendingFragment = fragment;
        this.router.navigate(['/']);
      }
    } else {
      // navigate to root and set pending fragment so the NavigationEnd handler scrolls
      this.pendingFragment = fragment;
      this.router.navigate(['/']);
    }
  }
}
