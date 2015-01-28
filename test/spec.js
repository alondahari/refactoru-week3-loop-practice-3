describe('loop-practice', function() {

  var students = [
    {
     name: 'Liz',
     age: 25,
     city: 'Boulder'
    },{
     name: 'Meghan',
     age: 27,
     city: 'Denver'
    },{
     name: 'Trent',
     age: 32,
     city: 'Boulder'
    },{
     name: 'Chelsea',
     age: 24,
     city: 'Boulder'
    },{
     name: 'Amir',
     age: 18,
     city: 'Denver'
    }
  ];

  it('should should print all the ages in order', function() {
    expect(agesInOrder(students)).toBe([25,27,32,24,18]);
  });

  it("should print names and cities in order", function () {
    expect(namesAndCities(students)).toBe(['Liz, Boulder', 'Meghan, Denver', 'Trent, Boulder', 'Chelsea, Boulder', 'Amir, Denver']);
  });

  it("should print all students from Boulder", function () {
    expect(peopleFromBoulder(students)).toBe(['Liz is from Boulder','Trent is from Boulder','Chelsea is from Boulder']);
  });

  it("should print all students older than 25", function () {
    expect(olderThan25(students)).toBe(['Meghan is older than 25','Trent is older than 25']);
  });
});
