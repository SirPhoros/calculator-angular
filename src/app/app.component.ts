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
    this.calcAnswer();
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
    this.calcAnswer();
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

  // Method to calculate the answer based on the current input
  calcAnswer() {
    let formula = this.input;

    let lastKey = formula[formula.length - 1];

    // Remove trailing operator or '.' from the formula if present
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+' ||
      lastKey === '.'
    ) {
      formula = formula.slice(0, formula.length - 1);
    }

    console.log('Formula ' + formula);
    this.result = this.evaluateFormula(formula);
  }

  // Method to evaluate the formula and calculate the result
  evaluateFormula(formula: string): string {
    const operators: { [key: string]: (a: number, b: number) => number } = {
      '+': (a: number, b: number) => a + b,
      '-': (a: number, b: number) => a - b,
      '*': (a: number, b: number) => a * b,
      '/': (a: number, b: number) => a / b,
    };

    const expression = formula.match(/(\d+|\+|-|\*|\/)/g);

    if (!expression) {
      return '';
    }

    let result = Number(expression[0]);

    // Perform the calculations based on the expression
    for (let i = 1; i < expression.length; i += 2) {
      const operator = expression[i];
      const operand = Number(expression[i + 1]);

      // Check if the operator is valid and the operand is a number
      if (!operators[operator] || isNaN(operand)) {
        return '';
      }

      // Apply the operator function to the current result and operand
      result = operators[operator](result, operand);
    }

    return result.toString();
  }
}
