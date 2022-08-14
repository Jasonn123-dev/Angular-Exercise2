import { Injectable } from '@angular/core';
import { Book } from '../book/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  getBook(): Book[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  book: Book[] = [
    {
      id: 11111111111,
      title: "Jayson's blog",
      description: "My blog",
      author: "Thomas Hern's",
      comments: [
        "Nice blog",
        "Very nice blog"
      ]
    },
    {
      id: 22222222222,
      title: "Between the Borders",
      description: "My blog",
      author: "David Allen",
      comments: [
        "Good Blog",
        "Very good blog"
      ]
    }
  ]

  getBlog = () => {
    return this.book;
  }
}
