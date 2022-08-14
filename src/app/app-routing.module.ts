import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "blog",
    loadChildren: () => import('./blog/blog.module').then( b => b.BlogModule)
  },
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then( a => a.BookModule)
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then( c => c.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
