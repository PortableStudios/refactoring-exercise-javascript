const movies = {
  F001: { title: 'Ran', code: 'regular' },
  F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
  F003: { title: 'Cars 2', code: 'childrens' },
  F004: { title: 'Latest Hit Release', code: 'new' },
};

class Rental {
  statement(customer) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let r of customer.rentals) {
      const movie = movies[r.movieID];
      let thisAmount = 0;

      // determine amount for each movie
      switch (movie.code) {
        case 'regular':
          thisAmount = 2;
          if (r.days > 2) {
            thisAmount += (r.days - 2) * 1.5;
          }
          break;
        case 'new':
          thisAmount = r.days * 3;
          break;
        case 'childrens':
          thisAmount = 1.5;
          if (r.days > 3) {
            thisAmount += (r.days - 3) * 1.5;
          }
          break;
        default:
          throw new Error('Unknown movie type');
      }

      // add frequent renter points
      frequentRenterPoints += 1;
      // add bonus for a two day new release rental
      if (movie.code === 'new' && r.days > 2) frequentRenterPoints += 1;

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
