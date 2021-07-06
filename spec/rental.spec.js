describe('Rental', function () {
  var stuff;

  beforeEach(function () {
    stuff = new Rental();
  });

  describe('customer has two regular movies', () => {
    var properResult =
      'Rental Record for martin' +
      'Ran     3.5' +
      'Trois Couleurs: Bleu    2' +
      'Amount owed is 5.5' +
      'You earned 2 frequent renter points';

    it('should return the proper result', function () {
      properResult = properResult.replace(/\s+/g, '');

      var customer = {
        name: 'martin',
        rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
      };

      var actualResult = stuff.statement(customer).replace(/\s+/g, '');
      expect(actualResult).toEqual(properResult);
    });
  });

  describe('customer has a childrens movie', () => {
    var properResult =
      'Rental Record for martin' +
      'Cars2     1.5' +
      'Amount owed is 1.5' +
      'You earned 1 frequent renter points';

    it('should return the proper result', function () {
      properResult = properResult.replace(/\s+/g, '');

      var customer = {
        name: 'martin',
        rentals: [{ movieID: 'F003', days: 3 }]
      };

      var actualResult = stuff.statement(customer).replace(/\s+/g, '');
      expect(actualResult).toEqual(properResult);
    });
  });
});
