import { NgModule } from '@angular/core';
import { TopAlbumsService } from './shared/top-albums.service';
import { TopAlbumsRoutingModule } from './top-albums-routing.module';
import { TopAlbumsComponent } from './top-albums.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlbumListItemComponent } from './album-list/album-list-item/album-list-item.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumInfoModalServiceService } from './album-info/album-info-modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AlbumInfoModalComponent } from './album-info/album-info-modal/album-info-modal.component';

@NgModule({
  declarations: [
    TopAlbumsComponent,
    AlbumListItemComponent,
    AlbumListComponent,
    AlbumInfoModalComponent,
  ],
  imports: [
    CommonModule,
    TopAlbumsRoutingModule,
    HttpClientModule,
    MatDialogModule,
  ],
  exports: [TopAlbumsComponent],
  providers: [TopAlbumsService, AlbumInfoModalServiceService],
})
export class TopAlbumsModule {}
