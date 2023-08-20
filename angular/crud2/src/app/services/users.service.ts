import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL = 'http://localhost:3000/users'


  constructor(private _httpClient: HttpClient) { }

  addUser(data: any): Observable<any> {
    return this._httpClient.post(this.baseURL, data)
  }

  fetchUser(): Observable<any> {
    return this._httpClient.get(this.baseURL)
  }

  deleteUser(id: number): Observable<any> {
return this._httpClient.delete(`http://localhost:3000/users/${id}`)
  }

  updateUser(id: number, data: any): Observable<any> {
    return this._httpClient.put(`http://localhost:3000/users/${id}`, data)
  }
}
