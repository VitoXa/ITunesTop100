import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoModalComponent } from './album-info-modal.component';

describe('AlbumInfoModalComponent', () => {
  let component: AlbumInfoModalComponent;
  let fixture: ComponentFixture<AlbumInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
