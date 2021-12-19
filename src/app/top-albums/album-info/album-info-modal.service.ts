import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Album } from '../shared/album.model';
import { AlbumInfoModalComponent } from './album-info-modal/album-info-modal.component';

@Injectable()
export class AlbumInfoModalService {
  constructor(private dialog: MatDialog) {}

  showAlbumInfo(album: Album) {
    this.dialog.open(AlbumInfoModalComponent, {
      data: { album: album },
      panelClass: 'custom-dialog'
    });
  }
}
