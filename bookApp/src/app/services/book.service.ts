import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../model/book";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    url = 'http://localhost:3000/books'  // JsonServer
    // Communicate with  Server   -- HttpClient
    // HttpClinet   - import HttpClinetModule
    // GET POST PUT DELETE
    //Inject HttpClient
    constructor(private httpClient: HttpClient) {
    }
    insertBookDetails(book: Book): Observable<Book> {


        let data = JSON.stringify(book);
        let x = this.httpClient.post<Book>(this.url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return x
    }
    getAllBookDetails(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.url)
    }

    getBookById(id: number): Observable<Book> {
        //http://localhost:3000/books/2
        return this.httpClient.get<Book>(`${this.url}/${id}`)
    }
}

