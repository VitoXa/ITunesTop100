import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AlbumInfoModalService } from '../../album-info/album-info-modal.service';
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

  constructor(private albumInfoModalService: AlbumInfoModalService) {}

  openAlbumInfo() {
    this.albumInfoModalService.showAlbumInfo(this.album);
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  onAlbumNameKeyDown(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === "enter") {
      e.preventDefault();
      e.stopPropagation();
      this.openAlbumInfo();
    }
  }
}
