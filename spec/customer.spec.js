describe('Customer', function () {
  var stuff;

  beforeEach(function () {
    stuff = new Customer();
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

  describe('customer has a childrens movie for 3 days or less', () => {
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

  describe('customer has a childrens movie for more than 3 days', () => {
    var properResult =
      'Rental Record for martin' +
      'Cars2     3' +
      'Amount owed is 3' +
      'You earned 1 frequent renter points';

    it('should return the proper result', function () {
      properResult = properResult.replace(/\s+/g, '');

      var customer = {
        name: 'martin',
        rentals: [{ movieID: 'F003', days: 4 }]
      };

      var actualResult = stuff.statement(customer).replace(/\s+/g, '');
      expect(actualResult).toEqual(properResult);
    });
  });

  describe('customer has a new movie for 2 days or less', () => {
    var properResult =
      'Rental Record for martin' +
      'Latest Hit Release     6' +
      'Amount owed is 6' +
      'You earned 1 frequent renter points';

    it('should return the proper result', function () {
      properResult = properResult.replace(/\s+/g, '');

      var customer = {
        name: 'martin',
        rentals: [{ movieID: 'F004', days: 2 }]
      };

      var actualResult = stuff.statement(customer).replace(/\s+/g, '');
      expect(actualResult).toEqual(properResult);
    });
  });

  describe('customer has a new movie for more than 2 days', () => {
    var properResult =
      'Rental Record for martin' +
      'Latest Hit Release     9' +
      'Amount owed is 9' +
      'You earned 2 frequent renter points';

    it('should return the proper result', function () {
      properResult = properResult.replace(/\s+/g, '');

      var customer = {
        name: 'martin',
        rentals: [{ movieID: 'F004', days: 3 }]
      };

      var actualResult = stuff.statement(customer).replace(/\s+/g, '');
      expect(actualResult).toEqual(properResult);
    });
  });
});
