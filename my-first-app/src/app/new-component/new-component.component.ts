import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  stringInterpolationVariable = "This is a strgin from the ts file";
  variableText = "This text should change";
  fruits = ['apple', 'pear', 'pineapple', 'mango', 'serrano'];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.variableText = "The text has chenged!!!";
  }

}
