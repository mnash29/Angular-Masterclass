import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    UserComponent,
    TasksComponent,
  ],
})
export class AppModule {}
