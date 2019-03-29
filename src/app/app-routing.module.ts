import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sanpham', loadChildren: './sanpham/sanpham.module#SanphamPageModule' },
  { path: 'giohang', loadChildren: './giohang/giohang.module#GiohangPageModule' },
  { path: 'nguoidung', loadChildren: './nguoidung/nguoidung.module#NguoidungPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
