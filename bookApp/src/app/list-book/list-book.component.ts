import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  // Inject BookService Object in Constructor
  constructor(private service: BookService) { }

  bookList: Book[] = []

  ngOnInit(): void {
    this.service.getAllBookDetails().subscribe(data => {
      this.bookList = data
    })
  }
}
