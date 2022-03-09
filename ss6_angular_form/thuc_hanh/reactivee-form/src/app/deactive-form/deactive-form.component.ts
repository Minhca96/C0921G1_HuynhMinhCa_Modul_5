import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-deactive-form',
  templateUrl: './deactive-form.component.html',
  styleUrls: ['./deactive-form.component.css']

})
export class DeactiveFormComponent implements OnInit {
  studentForm : FormGroup ;

  constructor() {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name : new FormControl(""),
      dateOfBirth : new FormControl("")
    })

  }


  save(){
    console.log(this.studentForm.value)
  }
}
