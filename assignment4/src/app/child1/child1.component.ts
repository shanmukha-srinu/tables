import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  value: Number;
  tablenumbers: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  temp:Number[];
  on_create_tables = function() {
     this.temp=[];
      this.temp.push(this.value);
    this.value=" "
}
  ngOnInit(): void {
  }

}
