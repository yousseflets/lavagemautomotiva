import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

declare const module: any;

function run(): Promise<unknown> {
  return bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
}

if (module && module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    // Optional cleanup can go here.
  });
}

run();
