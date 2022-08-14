import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   
    

  constructor() { }

  ngOnInit(): void {
  }
  executeAction(user:User) {
    console.log(user)


}
}
