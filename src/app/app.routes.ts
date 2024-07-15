import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin/books',
        title: 'Administrar libros',
        loadComponent: () => import('./pages/admin/book-list/book-list.component')
    }
];
