import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SubmitComponent } from '../submit/submit.component';
import { EmployeeDetail }    from '../employeeDetail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	empl:EmployeeDetail;
	

  constructor() { }
  
  model = new EmployeeDetail('Swaroop', 18,'TCS');
  
  userName:string='';
  userAge:number;
  userOffice:string='';
  
  setVal(){
    const formValues = {
      userName:this.model.name,
      userAge:this.model.age,
	  userOffice:this.model.office
    };
    return formValues;
  }

  ngOnInit() {
  
  }

}
