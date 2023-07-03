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
    // Append the pressed number to the input and calculate the answer
    this.input = this.input + num;
  };

  // Method triggered when an operator button is pressed
  operator(op: string) {
    // Do not allow operators more than once consecutively
    const lastKey = this.input[this.input.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+'
    ) {
      return;
    }

    // Append the pressed operator to the input and calculate the answer
    this.input = this.input + op;
  }

  clear() {
    if (this.input != '') {
      this.input = this.input.slice(0, this.input.length - 1);
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
  }
}
