import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BookPage } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookAdminService {
  private http = inject(HttpClient);

  paginate() {
    return this.http.get<BookPage>('http://localhost:8080/api/admin/books');
  }

  create() {

  }

  get() {

  }

  update() {

  }

  delete() {

  }

}
