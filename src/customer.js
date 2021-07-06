const movies = {
  F001: { title: 'Ran', code: 'regular' },
  F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
  F003: { title: 'Cars 2', code: 'childrens' },
  F004: { title: 'Latest Hit Release', code: 'new' },
};

class Customer {
  statement(customer) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;

    for (const rental of customer.rentals) {
      const movie = movies[rental.movieID];
      let thisAmount = 0;

      // determine amount for each movie
      switch (movie.code) {
        case 'regular':
          thisAmount = 2;
          if (rental.days > 2) {
            thisAmount += (rental.days - 2) * 1.5;
          }
          frequentRenterPoints += 1;
          break;
        case 'new':
          thisAmount = rental.days * 3;
          if (rental.days > 2) {
            frequentRenterPoints += 2;
          } else {
            frequentRenterPoints += 1;
          }
          break;
        case 'childrens':
          thisAmount = 1.5;
          if (rental.days > 3) {
            thisAmount += (rental.days - 3) * 1.5;
          }
          frequentRenterPoints += 1;
          break;
        default:
          throw new Error('Unknown movie type');
      }

      // print figures for this rental
      result += `\t${movie.title}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    }

    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  }
}
