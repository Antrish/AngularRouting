import { NgModule } from "@angular/core";
import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
// import { CourseGaurdService } from "./course-gaurd.service";
import { CanDeactivateGaurdService } from "./candeactivate-gaurd-service";
import { ContactComponent } from "./contact/contact.component";
import { CourseResolveService } from "./course-resolve-service";


const appRoute : Routes = [
    {path:'', component: HomeComponent},
    // {path:'', redirectTo: 'Home', pathMatch: 'full'},
    {path:'Home', component: HomeComponent},
    {path:'Contact', canDeactivate:[CanDeactivateGaurdService], component: ContactComponent},
    {path:'About', component: AboutComponent},
    {path: 'Courses', component:CoursesComponent, resolve: {resolvedCourses: CourseResolveService}}, // canActivate:[CourseGaurdService] was addd to rstrict courses without login
    {path:'Courses/Course/:id', component: CourseComponent},
    {path:'**', component: ErrorComponent}
  ]
@NgModule({
imports : [
    RouterModule.forRoot(appRoute)
],

exports :[
    RouterModule
]
})
export class AppRoutingModule {

}