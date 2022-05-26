import { Component } from '@angular/core';


//Components are the most basic UI building block of an Angular app
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Project';
  msg = "Develop Single Page Application using Angular"


  book = {
    "isbn": 'JAVA123',
    "name": "Angular Project",
    "price": 250
  }

  imgLoc = '..//src//assets//image//wipro-logo.png'
  status = false

  showMessage() {
    alert('Button Clicked')
    this.status = true
  }

}
