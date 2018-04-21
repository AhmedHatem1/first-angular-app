import {Component} from "@angular/core";

@Component({
  selector:"Hatem",
  template:`<h1>{{name}}</h1>
  <product></product>
  `
})
export class AppComponent
{
  name:string = "Ahmed Hatem";
}