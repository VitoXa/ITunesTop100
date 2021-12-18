import { NgModule } from '@angular/core';
import { TopAlbumsService } from './shared/top-albums.service';
import { TopAlbumsRoutingModule } from './top-albums-routing.module';
import { TopAlbumsComponent } from './top-albums.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlbumListItemComponent } from './album-list/album-list-item/album-list-item.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [TopAlbumsComponent, AlbumListItemComponent, AlbumListComponent],
  imports: [CommonModule, TopAlbumsRoutingModule, HttpClientModule],
  exports: [TopAlbumsComponent],
  providers: [TopAlbumsService],
})
export class TopAlbumsModule {}
