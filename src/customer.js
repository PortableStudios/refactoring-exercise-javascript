const movies = {
  F001: { title: 'Ran', code: 'regular' },
  F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
  F003: { title: 'Cars 2', code: 'childrens' },
  F004: { title: 'Latest Hit Release', code: 'new' },
};

// Customer has a name
// Customer has many Rentals
// A single Rental consists of a Movie ID and number of days for the rental
// Customer has one Statement
// Statement can be rendered to screen

class Rental {
  constructor(movieID, days) {
    this.movieID = movieID;
    this.days = days;
  }

  calculate() {
    const movie = movies[this.movieID];
    let amount = 0;
    let frequentRenterPoints = 0;

    switch (movie.code) {
      case 'regular':
        amount = 2;
        if (this.days > 2) { amount += (this.days - 2) * 1.5; }
        frequentRenterPoints += 1;
        break;
      case 'new':
        amount = this.days * 3;
        if (this.days > 2) {
          frequentRenterPoints += 2;
        } else {
          frequentRenterPoints += 1;
        }
        break;
      case 'childrens':
        amount = 1.5;
        if (this.days > 3) { amount += (this.days - 3) * 1.5; }
        frequentRenterPoints += 1;
        break;
      default:
        throw new Error('Unknown movie type');
    }

    return ({
      amount,
      movie,
      frequentRenterPoints,
    });
  }

}

class Customer {
  constructor(name, rentals) {
    this.name = name;
    this.rentals = rentals;
  }

  statement() {
    let statement = `Rental Record for ${this.name}\n`;

    const results = this.rentals.map((rental) => (
      new Rental(rental.movieID, rental.days).calculate()
    ));

    // print figures for all rentals
    statement += results.map((result) => (
      `\t${result.movie.title}\t${result.amount}\n`
    )).join('');

    // add footer lines
    const totalAmount = results.reduce((acc, currentValue) => acc + currentValue.amount, 0);
    const frequentRenterPoints = results.reduce((acc, currentValue) => acc + currentValue.frequentRenterPoints, 0);

    statement += `Amount owed is ${totalAmount}\n`;
    statement += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return statement;
  }
}
