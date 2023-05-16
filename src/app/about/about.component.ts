import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor (private route :Router, private activatedRout:ActivatedRoute){}

  navigateToHome(){
    //this.route.navigate(['Home']);
    this.route.navigate(['Home'], {relativeTo: this.activatedRout});
    //this.route.navigateByUrl('Home');
  }
// ** Navigate and NavigateByUrl methods returns "Absulute" path by default.
// ** To get relative path, we must need to get "ActivatedRout" and then pass "relativeTo" property as second argument of "Navigate" methods array.
}
