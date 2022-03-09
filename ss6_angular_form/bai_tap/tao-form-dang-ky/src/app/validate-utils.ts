import {AbstractControl} from '@angular/forms';

export class ValidateUtils {
  check18(ac: AbstractControl): any {
    const yearRegister = Number(ac.value.substr(0, 4));
    const yearCurrent = new Date().getFullYear();
    return yearCurrent - yearRegister >= 18 ? null : {check18: true};
  }
  checkPass(ac: AbstractControl): any {
    console.log(ac);
    const v = ac.value;
    return v.password === v.confirmPassword ? null : { notMatch: true};
  }
}
