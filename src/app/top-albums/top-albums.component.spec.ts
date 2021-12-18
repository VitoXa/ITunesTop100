import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Album } from './shared/album.model';
import { TopAlbumsService } from './shared/top-albums.service';

import { TopAlbumsComponent } from './top-albums.component';

describe('TopAlbumsComponent', () => {
  let component: TopAlbumsComponent;
  let fixture: ComponentFixture<TopAlbumsComponent>;
  let topAlbumsService: jasmine.SpyObj<TopAlbumsService>;
  const albums: Album[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopAlbumsComponent],
      providers: [
        {
          provide: TopAlbumsService,
          useValue: jasmine.createSpyObj<TopAlbumsService>(['getTopAlbums']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    topAlbumsService = TestBed.inject(
      TopAlbumsService
    ) as jasmine.SpyObj<TopAlbumsService>;
    topAlbumsService.getTopAlbums.and.returnValue(of(albums));

    fixture = TestBed.createComponent(TopAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
