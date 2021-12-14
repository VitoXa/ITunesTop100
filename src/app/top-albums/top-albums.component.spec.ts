import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAlbumsComponent } from './top-albums.component';

describe('TopAlbumsComponent', () => {
  let component: TopAlbumsComponent;
  let fixture: ComponentFixture<TopAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
