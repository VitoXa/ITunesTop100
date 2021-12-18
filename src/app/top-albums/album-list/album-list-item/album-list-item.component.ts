import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
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

  imgLoaded = false;

  constructor(private changeDetector: ChangeDetectorRef) {}

  imgFullyLoaded() {
    this.imgLoaded = true;
    this.changeDetector.detectChanges();
  }
}
