// import { bootstrapApplication } from '@angular/platform-browser'; // Standalone version
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppComponent } from './app/app.component'; // Standalone version
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent).catch((err) => console.error(err)); // Standalone version
platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.error(err));
