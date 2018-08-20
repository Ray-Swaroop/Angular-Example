import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from '../employeeDetail';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
  template: `
    <button (click)="onClickMe()">Click me!</button>
	<div>
    Name: {{userName}} <br>
	Age: {{userAge}} <br>
	Office: {{userOffice}} <br>
	<div>`
})
export class SubmitComponent implements OnInit {

constructor(private formComponent: FormComponent) { }

userName:string = '';
userAge:number ;
userOffice:string= '';
 
  onClickMe() {
    let formValues = this.formComponent.setVal();
	
    this.userName = formValues.userName;
    this.userAge = formValues.userAge;
	this.userOffice=formValues.userOffice;
  }

  ngOnInit() {
  }

}
