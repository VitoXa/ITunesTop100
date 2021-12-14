import { NgModule } from '@angular/core';
import { TopAlbumsService } from './shared/top-albums.service';
import { TopAlbumsRoutingModule } from './top-albums-routing.module';
import { TopAlbumsComponent } from './top-albums.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TopAlbumsComponent],
  imports: [CommonModule, TopAlbumsRoutingModule, HttpClientModule],
  exports: [TopAlbumsComponent],
  providers: [TopAlbumsService],
})
export class TopAlbumsModule {}
