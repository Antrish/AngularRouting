import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, Event, NavigationCancel } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';
  displayLoaddingSpinner = false;

  constructor(private activatedRote :ActivatedRoute, private authsvc:AuthService, private router :Router ){

  }
  ngOnInit(){
this.activatedRote.fragment.subscribe((fragParam)=>{
this.jumpToSection(fragParam)
});
  this.router.events.subscribe((routerEvents : Event)=> {
    if(routerEvents instanceof NavigationStart){
      this.displayLoaddingSpinner = true;
    }
    if(routerEvents instanceof NavigationEnd || routerEvents instanceof NavigationCancel){
      this.displayLoaddingSpinner = false;
    }
  })
  }
  jumpToSection(section){
    document.getElementById(section)?.scrollIntoView();
  }
  login(){
    this.authsvc.login()
    alert('You are logged in to Cources...!!')
    this.router.navigate(['Courses']);

  } 

  logout(){
    this.authsvc.logout()
    alert('You are logged out from Cources...!!')
    this.router.navigate(['']);
  }
}
