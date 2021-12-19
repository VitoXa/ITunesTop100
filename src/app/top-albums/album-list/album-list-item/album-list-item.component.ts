import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Album } from '../../shared/album.model';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListItemComponent {
  @Input()
  album!: Album;

  constructor() {}

  openAlbumInfo() {
    alert("Where are all dialogs?");
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }
}
