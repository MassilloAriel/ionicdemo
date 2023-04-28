import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getUserFeed() {
    return this.http.get<User[]>(`${constants.API_URL}/users`);
  }
}
