import { NgModule } from '@angular/core';
import { TopAlbumsRoutingModule } from './top-albums-routing.module';
import { TopAlbumsComponent } from './top-albums.component';

@NgModule({
  declarations: [TopAlbumsComponent],
  imports: [TopAlbumsRoutingModule],
  exports: [TopAlbumsComponent],
  providers: [],
})
export class TopAlbumsModule {}
