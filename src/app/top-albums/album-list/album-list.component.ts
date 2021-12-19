import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../shared/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],

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
export class AlbumListComponent implements OnInit {
  @Input()
  albums!: Album[] | null;

  constructor() {}

  ngOnInit(): void {}

  trackAlbum(_: number, album: Album) {
    return album.id;
  }
}
