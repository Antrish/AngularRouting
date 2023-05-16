import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseGaurdService implements CanActivate{
    constructor(private authservice : AuthService, private router :Router){}
    
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authservice.isAuthenticated()){
        return true;
    }else{
        this.router.navigate(['']);
        return false;
    }
}
}