import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from '../../shared/album.model';

@Component({
  selector: 'app-album-info-modal',
  templateUrl: './album-info-modal.component.html',
  styleUrls: ['./album-info-modal.component.scss'],
})
export class AlbumInfoModalComponent implements OnInit {
  album: Album;
  constructor(@Inject(MAT_DIALOG_DATA) albumData: AlbumInfoData) {
    this.album = albumData.album;
  }

  ngOnInit(): void {}
}

export interface AlbumInfoData {
  album: Album;
}
