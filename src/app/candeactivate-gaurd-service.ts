import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateComponent{
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGaurdService implements CanDeactivate<IDeactivateComponent>{
canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canExit();
}
}