import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  public result : number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  tinh(number1: any,number2: any,choise: string)  {

switch (choise) {
  case "+":

    this.result = Number(number1) + Number(number2) ;
   // document.write(String(this.result));
  break;
  case "-":

    this.result = number1 - number2 ;
    // document.write(String(this.result));
    break;
  case "*":

    this.result = number1 * number2 ;
    // document.write(String(this.result));
    break;
  case "/":
    if(number2 == 0){
      document.write("mau so khong phai khac 0")
    }else {
      this.result = number1 / number2;
      break;
    }
}
  }
}
