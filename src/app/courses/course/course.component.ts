import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CoursesService, private activatedroute: ActivatedRoute, private router :Router) { }
  course;
  courseId;
  courseName;
  editMode : Boolean = false;

  ngOnInit(): void {
    this.courseId = this.activatedroute.snapshot.paramMap.get('id');
    //this.courseId = this.route.snapshot.params['name'];
    this.course = this.service.courses.find(x => x.id == this.courseId);

    this.activatedroute.queryParamMap.subscribe((params) => {
      this.editMode = Boolean(params.get('edit'));
    })
   
  }

  editQueryParam(){

    this.router.navigate(['/Courses/Course', this.courseId], { queryParams: { edit: true } })
  }
updateQueryParam(){
  this.editMode = false;
}
}
