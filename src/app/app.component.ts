import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'calculator-angular';

  // Input and result variables to store the user input and calculated result
  input: string = '';
  result: string = '';

  // Method triggered when a number button is pressed
  pressNum = (num: string) => {
    console.log(num);
  };
}
