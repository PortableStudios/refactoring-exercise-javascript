const movies = {
  F001: { title: 'Ran', code: 'regular' },
  F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
  F003: { title: 'Cars 2', code: 'childrens' },
  F004: { title: 'Latest Hit Release', code: 'new' },
};

class Customer {
  calculate(rental) {
    const movie = movies[rental.movieID];
    let amount = 0;
    let frequentRenterPoints = 0;

    // determine amount for each movie
    switch (movie.code) {
      case 'regular':
        amount = 2;
        if (rental.days > 2) {
          amount += (rental.days - 2) * 1.5;
        }
        frequentRenterPoints += 1;
        break;
      case 'new':
        amount = rental.days * 3;
        if (rental.days > 2) {
          frequentRenterPoints += 2;
        } else {
          frequentRenterPoints += 1;
        }
        break;
      case 'childrens':
        amount = 1.5;
        if (rental.days > 3) {
          amount += (rental.days - 3) * 1.5;
        }
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

  statement(customer) {
    let statement = `Rental Record for ${customer.name}\n`;

    const results = customer.rentals.map(this.calculate);

    // print figures for all rentals
    statement += results.map((result) => `\t${result.movie.title}\t${result.amount}\n`).join('');

    // add footer lines
    const totalAmount = results.reduce((acc, currentValue) => acc + currentValue.amount, 0);
    const frequentRenterPoints = results.reduce((acc, currentValue) => acc + currentValue.frequentRenterPoints, 0);
    statement += `Amount owed is ${totalAmount}\n`;
    statement += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return statement;
  }
}
