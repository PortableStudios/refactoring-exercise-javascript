class Statement {
  constructor(name, results, totalAmount, frequentRenterPoints) {
    this.name = name;
    this.results = results;
    this.totalAmount = totalAmount;
    this.frequentRenterPoints = frequentRenterPoints;
  }

  render() {
    let statement = `Rental Record for ${this.name}\n`;
    statement += this.results.map((result) => (
      `\t${result.movie.title}\t${result.amount}\n`
    )).join('');

    statement += `Amount owed is ${this.totalAmount}\n`;
    statement += `You earned ${this.frequentRenterPoints} frequent renter points\n`;
    return statement;
  }
}
