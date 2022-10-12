/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = (a, b) => {
    return a + b;
  };
  this.substraction = (a, b) => {
    return a - b;
  };
  this.multiplication = (a, b) => {
    return a * b;
  };
  this.division = (a, b) => {
    return a / b;
  };
}

const calc = new Calculator();
console.log(calc.sum(55, 110));
console.log(calc.substraction(55, 110));
console.log(calc.multiplication(55, 110));
console.log(calc.division(55, 110));
