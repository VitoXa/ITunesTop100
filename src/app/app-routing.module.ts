import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'top-albums',
  },
  {
    path: 'top-albums',
    loadChildren: () =>
      import('../app/top-albums/top-albums.module').then(
        (m) => m.TopAlbumsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
