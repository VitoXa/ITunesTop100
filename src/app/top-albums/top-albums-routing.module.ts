import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopAlbumsComponent } from './top-albums.component';

export const routes: Routes = [
  {
    path: '',
    component: TopAlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopAlbumsRoutingModule {}
