import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
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
      schemas: [NO_ERRORS_SCHEMA],
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

  it('should present error message if getting data failed', async () => {
    topAlbumsService.getTopAlbums.and.returnValue(
      throwError(() => new Error())
    );

    await component.fetchData();
    fixture.detectChanges();

    expect(component.connectionError).toBeTrue();
    expect(
      (fixture.nativeElement as HTMLElement).querySelector(
        '.connection-error-message'
      )
    ).not.toBeNull();
  });

  it('should hide error message after data fetched successfully', async () => {
    topAlbumsService.getTopAlbums.and.returnValue(
      throwError(() => new Error())
    );
    await component.fetchData();
    fixture.detectChanges();

    topAlbumsService.getTopAlbums.and.returnValue(of([]));
    await component.fetchData();
    fixture.detectChanges();

    expect(component.connectionError).toBeFalse();
    expect(
      (fixture.nativeElement as HTMLElement).querySelector(
        '.connection-error-message'
      )
    ).toBeNull();
  });
});
