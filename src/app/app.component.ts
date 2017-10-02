import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='my app';
  obj = {
    id :"1",
    name :"Nithin"
  };
  arr = ["a","h","b","c","s","m","q"];
  isTrue = true;
}
