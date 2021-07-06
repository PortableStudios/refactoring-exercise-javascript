const MOVIES = {
  F001: { title: 'Ran', code: 'regular' },
  F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
  F003: { title: 'Cars 2', code: 'childrens' },
  F004: { title: 'Latest Hit Release', code: 'new' },
};

class Rental {
  constructor(movieID, days) {
    this.movieID = movieID;
    this.days = days;
  }

  calculate() {
    const movie = MOVIES[this.movieID];
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
