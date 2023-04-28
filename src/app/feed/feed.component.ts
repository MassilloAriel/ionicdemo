import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { User } from '../models/users';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  implements OnInit {

  feed!:User[];
  loggedInUser:string = '';

  constructor(
    private _feedService: FeedService,
    private _authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('username') || '';

    this._feedService.getUserFeed().subscribe((data) => {
      this.feed = data;
    })
  }

  getAvatarInitials(name:string) {
    let split = name.split(' ');
    return split[0][0].toUpperCase() + (split.length > 1 ? split[0][1].toUpperCase(): '')
  }

  logout() {
    this._authService.logout().then(() => {
      this.router.navigate(['/'])
    })
  }

}
