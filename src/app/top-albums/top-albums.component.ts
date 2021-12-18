import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  firstValueFrom,
  Observable,
  Subscription,
} from 'rxjs';
import albumSearchExpression from './shared/album-search-expression';
import { Album } from './shared/album.model';
import { DataSource } from './shared/data-source/data-source';
import { StaticSearchableArrayDataSource } from './shared/data-source/static-searchable-array-data-source';
import { TopAlbumsService } from './shared/top-albums.service';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss'],
})
export class TopAlbumsComponent implements OnInit {
  static INITIAL_ALBUMS_COUNT = 100;
  albumDataSource!: DataSource<Album[]>;
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  albums$!: Observable<Album[]>;

  constructor(private topAlbumsService: TopAlbumsService) {}

  async ngOnInit(): Promise<void> {
    const albums = await firstValueFrom(
      this.topAlbumsService.getTopAlbums(
        TopAlbumsComponent.INITIAL_ALBUMS_COUNT
      )
    );

    this.albumDataSource = new StaticSearchableArrayDataSource(
      albums,
      albumSearchExpression,
      this.searchValue$.pipe(debounceTime(500))
    );

    this.albums$ = this.albumDataSource.connect();
  }

  searchChanged(event: KeyboardEvent) {
    this.searchValue$.next((event.target as HTMLInputElement).value);
  }
}
