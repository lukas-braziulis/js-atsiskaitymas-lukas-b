/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    }
    return false;
  }
}

const avengersMovie = new Movie("Avengers", "Joe Smth", 100000000000);
const dievuMiskasMovie = new Movie("Dievu miskas", "Nepamenu", 1000001);
console.log(avengersMovie.wasExpensive());
console.log(dievuMiskasMovie.wasExpensive());

console.log(avengersMovie);
console.log(dievuMiskasMovie);
