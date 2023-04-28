import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { IonicModule } from '@ionic/angular';
import { PostsComponent } from './posts.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [PostsComponent, ModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
