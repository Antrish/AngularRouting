import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private coursesService :CoursesService, private activatedRoute : ActivatedRoute){}
 courses;

  ngOnInit(): void {
    // this.courses = this.coursesService.courses; loading courses from promise resolver
    // this.coursesService.getAllCourses().then((data)=>{
    //   this.courses = data;
    // }) // this was reaading courselist which was unresolved 

    // Reading resolved data after ResolveRouted has emitted the data 

    this.courses = this.activatedRoute.snapshot.data['resolvedCourses'];
  }
}
