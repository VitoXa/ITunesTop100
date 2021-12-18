import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject, firstValueFrom,
  map,
  Observable
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
  animations: [
    trigger('filterAnimation', [
      transition(':enter, -1 => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, animate('300ms ease-out', style({ opacity: 1 }))),
          ],
          { optional: true }
        ),
      ]),

      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),

            animate('300ms ease-out', style({ opacity: 1 })),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
      ]),
    ]),
  ],
})
export class TopAlbumsComponent implements OnInit {
  static INITIAL_ALBUMS_COUNT = 100;
  albumDataSource!: DataSource<Album[]>;
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  albums$!: Observable<Album[]>;
  albumsLength = -1;

  get loading() {
    return this.albumsLength === -1;
  }

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
      this.searchValue$
    );

    this.albums$ = this.albumDataSource.connect();

    this.albums$
      .pipe(map((a) => a.length))
      .subscribe((l) => (this.albumsLength = l));
  }

  searchChanged(event: KeyboardEvent) {
    this.searchValue$.next((event.target as HTMLInputElement).value);
  }
}
