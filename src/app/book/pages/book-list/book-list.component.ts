import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = []
  constructor(private bookService: BookServiceService){
    this.books = bookService.getBlog();
  }

  ngOnInit(): void {
  }
  executeAction(book:Book) {
    console.log(book.id)
}
}
