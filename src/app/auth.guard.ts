import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { SellService } from './service/sell.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private seller:SellService){}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('seller')){
        return true
      }
      return this.seller.issllersignup;
}
}
