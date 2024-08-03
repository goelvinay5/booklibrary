import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component'
import { BookCheckInComponent } from './components/book-check-in/book-check-in.component';
import { BookCheckOutComponent } from './components/book-check-out/book-check-out.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BookListComponent },
    { path: 'check-in/:id', component: BookCheckInComponent },
    { path: 'check-out/:id', component: BookCheckOutComponent }
  ];