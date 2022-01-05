import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:5000';
  httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };
  constructor(private httpClient:HttpClient) { }
  getUser():Observable<IUser[]>{
   return this.httpClient.get<IUser[]>(this.baseUrl+'/users');
  }
}
