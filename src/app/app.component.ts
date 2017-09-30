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
  arr = ["abc","def","ghi"];
  isTrue = true;
}
