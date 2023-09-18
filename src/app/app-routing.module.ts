import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { AuthGuard } from './auth.guard';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { SearchComponent } from './search/search.component';
import { SettimeComponent } from './settime/settime.component';
import { YourdateComponent } from './yourdate/yourdate.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller',
    component:SellerComponent
  },
  {
    path:'selle_home',
    component:SellerhomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'selle_product',
    component:AddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'update_product',
    component:UpdateproductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'serach/:query',
    component:SearchComponent,
  },
  {
    path:'settime',
    component:SettimeComponent
  },
  {
    path:'count',
    component:YourdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
