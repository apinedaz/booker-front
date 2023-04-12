import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url_api: string = `${environment.urlApi}/auth`;

  constructor(private http: HttpClient) { }

  public auth(login: Login): Observable<any>{
    return this.http.post<any>(this.url_api,login);
  }
}
