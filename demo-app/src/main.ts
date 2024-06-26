import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// JIT Compilation
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// AOT Compilation
platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));