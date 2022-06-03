import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  // FormBuilder  -  get object FormBuilder
  // Instead of creating object for FormBuilder
  // Angular Provides DI - constructor injection
  constructor(private fb: FormBuilder, private service: BookService) { }
  booKForm = this.fb.group({
    bookName: [''],
    price: [''],
    authorName: ['']
  })
  ngOnInit(): void {
    alert('AddBook Component invoked only once when the directive is instantiated.')
  }
  postData() {
    alert("Post Data")
    console.log(this.booKForm.value)
    this.service.insertBookDetails(this.booKForm.value).subscribe(data => {
      if (data != null) {
        alert('Data Inserted Sucessfully')
      }
    })
    alert(this.booKForm.value.bookName)
    alert(this.booKForm.value.price)
    alert(this.booKForm.value.authorName)
  }
}
