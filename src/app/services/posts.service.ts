import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/posts';
import { constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostsByUserId(id:string) {
    return this.http.get<Post[]>(`${constants.API_URL}/user/${id}/posts`);
  }
}
