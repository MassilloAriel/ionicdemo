import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Auth): Promise<{token:string}> {
    //fake login
    return new Promise((resolve,reject) => {
      if (credentials.username === 'test' && credentials.password === 'password') {
        resolve({token: '12345'})
      } else {
        reject('Invalid credentials');
      }
    })
  }

  logout(): Promise<boolean> {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}
