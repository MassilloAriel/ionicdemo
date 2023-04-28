import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id:string) {
    return this.http.get<User>(`${constants.API_URL}/users/${id}`)
  }
}
