import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { BookService } from 'src/app/Services/book.service';
import { lastValueFrom } from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  public books : Book[];

  constructor(private bookService: BookService){

    this.books = [];
  }

  ngOnInit(): void {
    lastValueFrom( this.bookService.getAll()).then( result =>{
      if(result.success){
        this.books = result.data;
        console.log(result.data);
      }
    }).catch();

    console.log(this.books);
  }


  public numSequence(n: number): Array<number> {
    return Array(n);
  }
}
