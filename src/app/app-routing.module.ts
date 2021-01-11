import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComicsComponent } from './detail-comics/detail-comics.component';
import { ComicsComponent } from './comics/comics.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  
  { path: 'cart', component: CartComponent },
  { path: 'detail/:id', component: DetailComicsComponent },
  { path: '', component: ComicsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
