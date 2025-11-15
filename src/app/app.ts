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
        } else {
          // No fragment requested: ensure new route starts at top
          try {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          } catch (err) {
            // fallback for environments where window is not available
            // eslint-disable-next-line no-console
            console.warn('[App] could not scroll to top', err);
          }
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
