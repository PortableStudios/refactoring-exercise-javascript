// Customer has a name
// Customer has many Rentals
// A single Rental consists of a Movie ID and number of days for the rental
// Customer has one Statement
// Statement can be rendered to screen

class Customer {
  constructor(name, rentals) {
    this.name = name;
    this.rentals = rentals;
  }

  statement() {
    const results = this.rentals.map((rental) => (
      new Rental(rental.movieID, rental.days).calculate()
    ));

    const totalAmount = results.reduce((acc, currentValue) => acc + currentValue.amount, 0);
    const frequentRenterPoints = results.reduce((acc, currentValue) => acc + currentValue.frequentRenterPoints, 0);

    return new Statement(this.name, results, totalAmount, frequentRenterPoints).render();
  }
}
