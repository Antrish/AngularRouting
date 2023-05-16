import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGaurdService } from './course-gaurd.service';
import { AuthService } from './auth.service';
import { CanDeactivateGaurdService } from './candeactivate-gaurd-service';
import { ContactComponent } from './contact/contact.component';
import { CourseResolveService } from './course-resolve-service';


// commented approute is moved to app-routing file
// const appRoute : Routes = [
//   {path:'', component: HomeComponent},
//   // {path:'', redirectTo: 'Home', pathMatch: 'full'},
//   {path:'Home', component: HomeComponent},
//   {path:'About', component: AboutComponent},
//   {path: 'Courses', component:CoursesComponent},
//   {path:'Courses/Course/:id', component: CourseComponent},
//   {path:'**', component: ErrorComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
   CoursesComponent,
   CourseComponent,
   ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoute),
    FormsModule,
    AppRoutingModule
  ],
  providers: [CoursesService, CourseGaurdService, AuthService,CanDeactivateGaurdService, CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
