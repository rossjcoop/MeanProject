import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Ross';
  title: string = 'ToDo\'s of';


  constructor() {
    this.changeName('Jon')
  }

  changeName(name: string):void {
    this.name = name;
  }
}
