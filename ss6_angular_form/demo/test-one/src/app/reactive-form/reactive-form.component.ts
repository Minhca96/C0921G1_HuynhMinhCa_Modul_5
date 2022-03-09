import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {ValidateUtils} from './ValidateUtils';




@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  studentForm: FormGroup;
  validateUtils = new ValidateUtils();

  constructor() {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
      address: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required, this.validateUtils.check18])
    });
  }

  save() {
    console.log(this.studentForm.value);
  }
}
