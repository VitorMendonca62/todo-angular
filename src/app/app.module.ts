import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from './modules/todo/todo.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HeaderComponent } from './modules/todo/components/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterOutlet, BrowserModule],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
