import { ComponentFixture, TestBed } from '@angular/core/testing';
import { album } from '../../shared/album-responce-to-albums-mapper.spec';

import { AlbumListItemComponent } from './album-list-item.component';

describe('AlbumListItemComponent', () => {
  let component: AlbumListItemComponent;
  let fixture: ComponentFixture<AlbumListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListItemComponent);
    component = fixture.componentInstance;
    component.album = album;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
