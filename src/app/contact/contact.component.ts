import { Component } from '@angular/core';
import { IDeactivateComponent } from '../candeactivate-gaurd-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{

  firstName;
  lastName;
  country;
  subject;
  constructor(){}

  canExit(){
    if(this.firstName || this.lastName || this.country || this.subject) {
     return confirm('You have unsaved changes. Do you want to discard the changes?');
    } else{
      return true;
    }
  }
}
