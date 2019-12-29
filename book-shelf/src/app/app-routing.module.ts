import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-shelf/books',
    pathMatch: 'full',
  },
  {
    path: 'book-shelf',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
