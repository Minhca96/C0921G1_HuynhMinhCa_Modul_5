import { Component, OnInit } from '@angular/core';

export interface Pet {
  name ?: String ;
  img ?: String ;
}

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
pet : Pet = {
  name : "bug",
  img : "https://chocanh.vn/wp-content/uploads/2021/03/cho-pug-mat-xe.jpg"

  }
  constructor() { }

  ngOnInit(): void {
  }

}
