import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { album } from '../shared/album-responce-to-albums-mapper.spec';

import { AlbumInfoModalService } from './album-info-modal.service';
import { AlbumInfoModalComponent } from './album-info-modal/album-info-modal.component';

describe('AlbumInfoModalServiceService', () => {
  let service: AlbumInfoModalService;
  let dialogService: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlbumInfoModalService,
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj<MatDialog>(['open']),
        },
      ],
    });

    dialogService = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    service = TestBed.inject(AlbumInfoModalService);
  });

  it('should be created', () => {
    // Assert
    expect(service).toBeTruthy();
  });

  it('should open mat dialog on showAlbumInfo', () => {
    // Arrange/Act
    service.showAlbumInfo(album);
    // Assert
    expect(dialogService.open).toHaveBeenCalledWith(AlbumInfoModalComponent, {
      data: { album: album },
      panelClass: 'custom-dialog',
    });
  });
});
