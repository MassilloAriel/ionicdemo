import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/posts';
import { FeedComponent } from '../feed/feed.component';
import { UserService } from '../services/user.service';

import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent  implements OnInit {

  id!:string;
  name: string = '';
  posts!:Post[];

  backComponent = FeedComponent;
  
  constructor(
    private _postsService: PostsService, 
    private _userService: UserService,
    private modalController: ModalController,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id') || '';
        this._userService.getUserById(this.id).subscribe(data => {
          if (Object.keys(data).length) {
            this.name = data.name;
          }
        })
      }
    })
    this._postsService.getPostsByUserId(this.id).subscribe(data => {
      this.posts = data;
    })
  }

  async open(title:string, content: string) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        title,
        content
      }
    });
    return await modal.present();
  }
}
