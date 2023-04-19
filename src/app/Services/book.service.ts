import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url_api: string = `${environment.urlApi}/book`;

  constructor(private http: HttpClient) { }

  public getAll():Observable<any>{
    return this.http.get<any>(`${this.url_api}/get-all`);
  }
}
