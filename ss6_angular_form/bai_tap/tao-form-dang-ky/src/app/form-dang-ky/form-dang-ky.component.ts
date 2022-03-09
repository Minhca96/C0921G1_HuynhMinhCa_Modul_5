import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateUtils} from '../validate-utils';

@Component({
  selector: 'app-form-dang-ky',
  templateUrl: './form-dang-ky.component.html',
  styleUrls: ['./form-dang-ky.component.css']
})
export class FormDangKyComponent implements OnInit {
  studentForm: FormGroup;
  validateUtils = new ValidateUtils();

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.validateUtils.check18]),
      passWork: new FormControl('', [Validators.required, this.validateUtils.checkPass]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090\d{7})|(091\d{7})|(8490\d{7})|(8491\d{7})|(082\d{7})$')])
    });
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.studentForm.value);
  }
}
