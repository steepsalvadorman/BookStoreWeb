import { Component, OnInit, inject } from '@angular/core';
import { BookAdminService } from '../../../services/book-admin.service';
import { BookPage } from '../../../interfaces/book.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html'
})
export default class BookListComponent implements OnInit {
  private bookAdminService = inject(BookAdminService);
  bookPage?: BookPage;

  ngOnInit(): void {
    this.bookAdminService.paginate()
      .subscribe(bookPage => {
        this.bookPage = bookPage;
      });
  }

}
