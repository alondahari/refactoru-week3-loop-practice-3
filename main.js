var agesInOrder = function(arr){
  return arr.map(function (val) {
    return val.age;
  });
};

var namesAndCities = function(arr){
  return arr.map(function (val) {
    return val.name + ', ' + val.city;
  });
};

var peopleFromBoulder = function(arr){
  return arr.filter(function (val) {
    return val.city == 'Boulder';
  }).map(function (val) {
    return val.name + ' is from Boulder';
  });
};

var olderThan25 = function(arr){
  return arr.filter(function (val) {
    return val.age > 25;
  }).map(function (val) {
    return val.name + ' is older than 25';
  });
};
