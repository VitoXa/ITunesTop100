import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AlbumInfoModalServiceService } from '../../album-info/album-info-modal-service.service';
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

  constructor(private albumInfoModalService: AlbumInfoModalServiceService) {}

  openAlbumInfo() {
    this.albumInfoModalService.showAlbumInfo(this.album);
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }
}
