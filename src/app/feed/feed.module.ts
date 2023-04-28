import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { IonicModule } from '@ionic/angular';
import { FeedComponent } from './feed.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    IonicModule,
    FeedRoutingModule,
    RouterModule,
  ],
})
export class FeedModule { }
