import { compileDeclareInjectorFromMetadata } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./Services/courses.service";
@Injectable()
export class CourseResolveService implements Resolve <any> {
    constructor(private courseservice : CoursesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.courseservice.getAllCourses().then((data) =>{
            return data;
        })
    }
}