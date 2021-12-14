import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Album } from './shared/album.model';
import { TopAlbumsService } from './shared/top-albums.service';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss'],
})
export class TopAlbumsComponent implements OnInit {
  static INITIAL_ALBUMS_COUNT = 100;

  albums: Album[] = [];

  constructor(private topAlbumsService: TopAlbumsService) {}

  async ngOnInit(): Promise<void> {
    this.albums = await firstValueFrom(
      this.topAlbumsService.getTopAlbums(
        TopAlbumsComponent.INITIAL_ALBUMS_COUNT
      )
    );
  }
}
