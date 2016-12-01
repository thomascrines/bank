// var myFunction = function(aFunction) {
//   aFunction(99);
// };

// var anotherFunction = function(number) {
//   console.log(number);
// };

// myFunction(anotherFunction);

var thingWeWantToHappenLater = function() {
  console.log("I waited to run");
};

setTimeout(thingWeWantToHappenLater, 1000);
console.log("a log");